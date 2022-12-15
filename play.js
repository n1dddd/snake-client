const {connect} = require('../snake-client/client') //imports connection functionality, initializes connection to server local host address, and then matching server port
const {setupInput} = require('./input') //imports user input functionality
console.log("Connecting ..."); //log that the file is being read, and is technically moving to the connection stage
connect(); //call on the connect function

process.stdout.write('\x07'); //user system sound to let user know connected to server

setupInput(); //call on user input function
