Make sure you have Node.js and npm installed. Then, run the following command to install the necessary packages

npm install 


Once the dependencies are installed  you can start the server using the following command:

npm start

// In postman // 
 # User Routes 
To create user details use route -    http://localhost:3000/api/user/create                 
To retrieve user detail use route -  http://localhost:3000/api/user/users/:userId
 # Expense Routes 
To create an expense for mutiple participants - http://localhost:3000/api/expense/create                                        
To retrieve expense of a certain user         - http://localhost:3000/api/expense/total-expenses/:userId                                      
To retrieve overall expenses                  - http://localhost:3000/api/expense/overallExpense                                                    
To retrieve BlanceSheet of an user            - http://localhost:3000/api/expense/userBalanceSheet/:userId                                                

 # GetBalanceSheet Routes 

To make an pdf for an balance sheet  for a user         - http://localhost:3000/api/balanceSheet/getBalanceSheet/:userID
