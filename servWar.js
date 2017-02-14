var express = require('express');
var app = express();
var server = require('http').Server(app);//usamos http para que funcione bien con socket.io(Pero le pasamos express)
var io = require('socket.io')(server);

 var mensajes = [{
   id : 1,
   texto: "Bienvenido",
   autor : "Admin"
 }];

app.use(express.static("public"));


app.get('/',function(request, response){
  response.status(200);
  response.send("Hola mundo!");
});

io.on('connection',function(socket){
  console.log("Nueva Conexion");
  socket.emit('msg',mensajes);

  socket.on('newMsg',function(data){
    mensajes.push(data);
    io.sockets.emit('msg',mensajes);
  });
});

server.listen(8080,function(){
  console.log("Server...[OK]");
});
