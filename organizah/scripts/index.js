var input = document.getElementById("tarefa")

function newElement() {
  var inputValue = document.getElementById("tarefa").value;
  var li = document.createElement("li");
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Escreva o nome da tarefa!");
  } else {
    document.getElementById("minhaLista").appendChild(li);
  }
  document.getElementById("tarefa").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

input.addEventListener('keypress', function criarTarefa(tecla){
  if(tecla.which == 13){
    newElement();
  }
}, false);

var minhaLista = document.getElementsByTagName("li");
var i;
for (i = 0; i < minhaLista.length; i++) {
  var fechar = document.createElement("SPAN");
  var texto = document.createTextNode("\u00D7");
  fechar.className = "close";
  fechar.appendChild(texto);
  minhaLista[i].appendChild(fechar);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}