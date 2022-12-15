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
  if (key === 'w') {
    connection.write("Move: up"); //sends a client write to server connection (conn object -- server reads the data "Move: up" and in turn moves the user 1 unit up)
  }
  if (key === 's') {
    connection.write("Move: down"); //all movement logic below is the same as above
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
};

module.exports = { //export the function as an object to be used in other files
  setupInput: setupInput,
};