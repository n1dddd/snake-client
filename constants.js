const IP = 'localhost';
const PORT = 50541;
const MOVE_UP_KEY = 'w'; //setting input logic to their respective movement key
const MOVE_DOWN_KEY = 's';
const MOVE_LEFT_KEY = 'a';
const MOVE_RIGHT_KEY = 'd';
const messages = { //object that contains mapped key values and their messages
  i: 'i sssssssspy',
  t: 'secret message unclocked'
};

module.exports = { //export the constants within an object
  IP,
  PORT,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  messages
};