var server = require('http').createServer();
var io = require('socket.io')(server);

var port = process.env.PORT || 12000;
server.listen(port);
console.log('Server started on port', port);

io.on('connection', function (socket) {
  console.log('Connection received');

  socket.on('broadcast', function (data) {
    socket.broadcast.emit('broadcast', data);
    // console.log(data);
  });
});

console.log("Yo, there's some important information you should know.");
console.log("For instance, what's your IP?");

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('Listening on "http://' + add + ':' + port + '"');
})
