$(document).ready(function(){
  can = $('#Map')[0];
  ter = $('#terreno')[0];
  ctx = can.getContext('2d');
  ctxTer = ter.getContext('2d');
  console.log(ter);
  var pasto = new Image();
  var piedra = new Image();
  pasto.src = "../res/PastoPlano(Ver. 1.0.5).png";
  piedra.src = "../res/Piedra(Ver1.0).png";

  sCC.on('newPlayer',function(data){
    console.log("Nuevo usuario");
    console.log(data);
    renderP(data);
  });

  sCC.on('update',function(data){
    console.log("update");
    renderP(data);
  });

  function renderP(data){
    ctx.clearRect(0, 0, can.width, can.height);
    data.forEach(function(data,i){
      ctx.fillStyle=data.color;
      ctx.fillRect(data.x,data.y,20,20);
    });
    terreno();
  }

  function terreno(){
    for (var j = 0; j <ter.height; j+=20) {
      for (var i = 0; i < ter.width; i+=20) {
        ctxTer.drawImage(pasto,i,j);
      }
    }
    ctx.drawImage(piedra,120,120,90,90);
  }

});
