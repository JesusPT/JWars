$(document).ready(function(){
  can = $("#Map")[0];
  ctx = can.getContext("2d");

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
  }

});
