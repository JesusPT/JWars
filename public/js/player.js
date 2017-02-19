var user = "us1";
var iduser;
var move;
$(document).ready(function(){
  sCC.emit('join',user);
  sCC.on('accept',function(id){
    console.log(id);
    iduser = id;
  });
  document.addEventListener("keydown",function(e){
    console.log(e);
    direction="";
    if(e.key == "ArrowDown"){
      // console.log("Abajo");
      direction = "down";
      move = {
        dir : direction,
        id : iduser
      }
      sCC.emit('move',move);
    }else if(e.key == "ArrowUp"){
      // console.log("Arriba");
      direction = "up";
      move = {
        dir : direction,
        id : iduser
      }
      sCC.emit('move',move);
    }else if(e.key == "ArrowLeft"){
      // console.log("Izquierda");
      direction = "left";
      move = {
        dir : direction,
        id : iduser
      }
      sCC.emit('move',move);
    }else if(e.key == "ArrowRight"){
      // console.log("Derecha");
      direction = "right";
      move = {
        dir : direction,
        id : iduser
      }
      sCC.emit('move',move);
    }

  });

});
