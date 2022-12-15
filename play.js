const {connect} = require('../snake-client/client'); //imports connection functionality, initializes connection to server local host address, and then matching server port
const {setupInput} = require('./input'); //imports user input functionality
console.log("Connecting ..."); //log that the file is being read, and is technically moving to the connection stage
const conn = connect(); //set connect function to conn variable
setupInput(conn); //pass the object return by connection in to the setupInput function as an argument
