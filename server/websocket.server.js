const WebSocket = require('ws');

const wsService = function(server) {
  const wsServer = new WebSocket.Server({
    server
  });

  wsServer.on('connection', function connection(clientSocket) {
    console.log('Got new socket connection from client ');

    clientSocket.on('client::message', function incoming(message) {
      console.log('received: %s', message);
    });

    clientSocket.send('sending from @ server ');
  });

}


module.exports = wsService;
