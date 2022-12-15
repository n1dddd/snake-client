const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541 // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DS");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = {
  connect: connect
};