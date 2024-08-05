

const Expense = require('../models/expense');
const express = require("express");

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const pdfDir = path.join(__dirname, '..', 'pdfs');

// Ensure the directory exists
if (!fs.existsSync(pdfDir)) {
  fs.mkdirSync(pdfDir);
}
exports.getBalanceSheet =  async (req, res) => {
  const {userId} = req.params ;
    try {
      // Fetch data from the database
      
      const data = await Expense.find({userId:userId}) ;
     console.log("userId" , userId) ;   
     console.log("data" , data) ;
      if (!data) {
        return res.status(404).send('Data not found');
      }
  
      // Create a new PDF document
      const doc = new PDFDocument();
    
      const filePath = path.join(pdfDir, `balance-sheet-${userId}.pdf`);
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);
      // Add content to the PDF
      doc.fontSize(25).text('Document Details', { align: 'center' });
      doc.moveDown();
      doc.text(`User ID: ${data[0].userId}`);
      data.forEach(expense => {
        doc.fontSize(14).text(`Amount: ${expense.amount}`);
      //   doc.text(`User ID: ${expense.userId}`);
        doc.text(`Description: ${expense.description}`);
        doc.text(`Date: ${expense.date}`);
        doc.moveDown(); // Adds some space between entries, remove if not needed
        // doc.addPage(); // Use this if you want each entry on a new page
      });
  
  
      // Finalize the PDF and end the stream
      doc.end();
      stream.on('finish', () => {
        res.send({ message: 'PDF generated successfully', path: filePath });
      });
  
      stream.on('error', (error) => {
        console.error('Error occurred while writing PDF:', error);
        res.status(500).send('Server error');
      });
    } catch (error) {
      console.log(error) ;
      res.status(500).send('Server error');
    }
  }
  