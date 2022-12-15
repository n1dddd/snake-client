const {MOVE_DOWN_KEY,MOVE_UP_KEY,MOVE_LEFT_KEY,MOVE_RIGHT_KEY,messages} = require('./constants'); //import movement logic from constants file, store within object

let connection; //initialize global empty object

const setupInput = function(conn) { //take in the conn object as an argument to UserInputFunction (so this function knows where to write/send user input)
  connection = conn; //global connection object now imported conn argument from client.js
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //on input from the user or "data", call the function handleUserInput, which then write the user output to the server
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) { //if user input key matches the key from constants.js
    connection.write("Move: up"); //sends a client write to server connection (conn object -- server reads the data "Move: up" and in turn moves the user 1 unit up)
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down"); //all movement logic below is the same as above
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
};

module.exports = { //export the function as an object to be used in other files
  setupInput: setupInput,
};