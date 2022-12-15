const net = require("net");
const {IP,PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port:PORT
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => { //when a connection is established, this function is called immediately
    console.log("Successfully connected to game server");
    conn.write("Name: DS");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn; //return the conn object
};

module.exports = { //export the function
  connect: connect
};