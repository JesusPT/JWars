$(document).ready(function(){
  can = $('#Map')[0];
  ter = $('#terreno')[0];
  ctx = can.getContext('2d');
  ctxTer = ter.getContext('2d');
  // console.log(ter);
  var pasto = new Image();
  var piedra = new Image();
  var paleta = new Image();
  pasto.src = "../res/PastoPlano(Ver. 1.0.5).png";
  piedra.src = "../res/Piedra(Ver1.0).png";
  paleta.src = "../res/tilea2.png";

  sCC.on('newPlayer',function(data){
    console.log("Nuevo usuario");
    console.log(data);
    renderP(data);
  });

  sCC.on('update',function(data){
    // console.log("update");
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

  var map = {
    patron : [[1,3,3,3,3,3,3,3,2],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [8,0,0,0,0,0,0,0,7],
              [4,6,6,6,6,6,6,6,5]],
    texturas :
    [[32,0,0], //pasto 0
    [32,2,7], //esquinaTierraSI 1
    [32,3,7], //esquinaTierraSD 2
    [32,2.5,7], //bordeTierraPastoS 3
    [32,2,8], // esquinaTierraII 4
    [32,3,8], // esquinaTierraID 5
    [32,2.5,8],
    [32,3,7.5],
    [32,2,7.5]]
  };

  function terreno(){
    // for (var i = 0; i <ter.height; i+=32) {
    //   for (var j = 0; j < ter.width; j+=32) {
    //     ctxTer.drawImage(paleta,32*3,32*7,32,32,i,j,32,32);
    //   }
    // }
    // $.each(map,function(i, item){
      map.patron.forEach(function(data, i){

        data.forEach(function(row,j){
        
          ctxTer.drawImage(paleta,32*map.texturas[row][1],32*map.texturas[row][2],32,32,j*32,i*32,32,32);

        });
      });
    // });
    ctx.drawImage(piedra,120,120,90,90);
  }

});
