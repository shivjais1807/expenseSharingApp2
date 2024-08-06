Make sure you have Node.js and npm installed. Then, run the following command to install the necessary packages

npm install 


Once the dependencies are installed  you can start the server using the following command:

npm start                                             

Now run  with Command                                                                                                                    
node server.js                  

// In postman // 
 # User Routes 
To create user details use route -    http://localhost:3000/api/user/create                 
To retrieve user detail use route -  http://localhost:3000/api/user/users/:userId
 # Expense Routes 
To create an expense for mutiple participants - http://localhost:3000/api/expense/create 
   example for creating an expense {
    "description": "Dinner at restaurant",
    "userId": "60d5f9d5f2e4f504f1b7b3c7",
    "amount": 50,
    "totalAmount": 200,
    "splitType": "exact",
    "participants": [
      {
        "userId": "60d5f9d5f2e4f504f1b7b3c8",
        "amount": 51
        
      },
      {
        "userId": "60d5f9d5f2e4f504f1b7b3c9",
        "amount": 49
       
      },
      {
        "userId": "60d5f9d5f2e4f504f1b7b3ca",
        "amount": 99
        
      },
      {
        "userId": "60d5f9d5f2e4f504f1b7b3cb",
        "amount": 1
    
      }
    ],
    "date": "2023-07-29T00:00:00.000Z"
  
}                                                                                                                                                      
To retrieve expense of a certain user         - http://localhost:3000/api/expense/total-expenses/:userId                                      
To retrieve overall expenses                  - http://localhost:3000/api/expense/overallExpense                                                    
To retrieve BlanceSheet of an user            - http://localhost:3000/api/expense/userBalanceSheet/:userId                                                

 # GetBalanceSheet Routes 

To make an pdf for an balance sheet  for a user         - http://localhost:3000/api/balanceSheet/getBalanceSheet/:userID
