var sCC = io.connect('http://localhost:8080',{'forceNew':true});

sCC.on('msg',function(data){
  render(data);
});

function render(data){
  var html = data.map(function(data,i){
    return(`<div>
                  <strong>${data.autor}</strong>
                  <em>${data.texto}</em>

                </div>`);
  }).join(" ");
  document.getElementById("frameChat").innerHTML = html;
}

function addMsg(e){
  var payload = {
    autor : document.getElementById('usuario').value,
    texto : document.getElementById('texto').value
  };

  sCC.emit('newMsg',payload);
  return false;
}
