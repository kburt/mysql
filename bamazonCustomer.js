var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'a',
  database : 'bamazon'
});
 
connection.connect();
 
connection.query('', function (error, results, fields) {
  if (error) throw error;
  console.log('', results[0].solution);
});
 
connection.end();

var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        name: "userInputID",
        message: "what is the ID of the product you want to buy?"
    }
]).then(function(whichID) {
//insert code here
});

inquirer.prompt([
    {
        type: "input",
        name: "userInputQuantity",
        message: "how many units do you want to buy?"
    }
]).then(function(howMuch) {
//insert code here
});

//make sure code can display item list

//take user response and look at database table to see if enough quantity to cover user request. if yes, update database quantity. if no, log a phrase saying insufficient quantity.
