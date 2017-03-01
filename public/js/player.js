var user = "us1";
var iduser;
var move;
var fnMoveU;
var fnMoveD;
var fnMoveR;
var fnMoveL;
$(document).ready(function(){
  sCC.emit('join',user);
  sCC.on('accept',function(id){
    console.log(id);
    iduser = id;
  });
  // $(document).keydown(function(e){
  //   // console.log(e.key);
  //   direction="";
  //   if(e.key == "s"){
  //     // console.log("Abajo");
  //     direction = "d";
  //     move = {
  //       dir : direction,
  //       id : iduser
  //     }
  //     sCC.emit('move',move);
  //   }else if(e.key == "w"){
  //     // console.log("Arriba");
  //     direction = "u";
  //     move = {
  //       dir : direction,
  //       id : iduser
  //     }
  //     sCC.emit('move',move);
  //   }else if(e.key == "a"){
  //     // console.log("Izquierda");
  //     direction = "l";
  //     move = {
  //       dir : direction,
  //       id : iduser
  //     }
  //     sCC.emit('move',move);
  //   }else if(e.key == "d"){
  //     // console.log("Derecha");
  //     direction = "r";
  //     move = {
  //       dir : direction,
  //       id : iduser
  //     }
  //     sCC.emit('move',move);
  //   }
  //
  // });

  $(document).on('keydown',function(e){
    switch (e.key){
      case 'w':
      if(fnMoveU == undefined && fnMoveD == undefined){
        fnMoveU = setInterval(upM,60)
      }
      break;
      case 's':
        if(fnMoveD == undefined && fnMoveU == undefined){
          fnMoveD = setInterval(downM,60)
        }
      break;
      case 'a':
        if(fnMoveL == undefined && fnMoveR == undefined){
          fnMoveL = setInterval(leftM,60)
        }
      break;
      case 'd':
        if(fnMoveR == undefined && fnMoveL == un){
          fnMoveR = setInterval(rigthM,60)
        }
      break;
      default:
        console.log(e.key);
      break;
    }
  });

  function upM(){
    move = {
         dir : 'u',
         id : iduser
    }
    sCC.emit('move',move);
  }

  function downM(){
    move = {
         dir : 'd',
         id : iduser
    }
    sCC.emit('move',move);
  }

  function leftM(){
    move = {
         dir : 'l',
         id : iduser
    }
    sCC.emit('move',move);
  }

  function rigthM(){
    move = {
         dir : 'r',
         id : iduser
    }
    sCC.emit('move',move);
  }


  $(document).on('keyup',function(e){
    console.log(e.key);
    switch (e.key){
      case 'w':
        clearInterval(fnMoveU);
        fnMoveU = undefined;
      break;
      case 's':
        clearInterval(fnMoveD);
        fnMoveD = undefined;
      break;
      case 'a':
        clearInterval(fnMoveL);
        fnMoveL = undefined;
      break;
      case 'd':
        clearInterval(fnMoveR);
        fnMoveR = undefined;
      break;
      default:
        console.log("#");
      break;
    }
  });

});
