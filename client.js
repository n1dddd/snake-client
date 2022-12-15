const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DS");
    // Set timeout code, sending raw conn.write in succession did not work
    // setTimeout(() => { //Using timeOut enables movement
    //   conn.write("Move: up");
    // },50)
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },100)
    // setTimeout(() => {
    //   conn.write("Move: up");
    // },150)
    setInterval(() => {
      conn.write("Move: up");
    },300);
  });
  // interpret incoming data as text

  conn.setEncoding("utf8");
  return conn;
};

module.exports = {
  connect: connect
};