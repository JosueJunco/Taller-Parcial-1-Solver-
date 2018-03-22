function Capturar(){

}

//Extrae los comandos ingresados en el prompt
Capturar.prototype.ExtraerComando = function () {
  var tamaño = document.getElementById("prompt").value.length;
  var posCom = document.getElementById("prompt").value.lastIndexOf(">",tamaño);
  var exCom = document.getElementById("prompt").value.substr(posCom+1,tamaño).toLowerCase();
  exCom = exCom.replace(" ","");
  exCom = exCom.replace(" ","");
  var com = exCom.substr(0,4);
  return com;
};

//Extrae los datos que se ingresen en el prompt
Capturar.prototype.ExtraerDato = function () {
  var tamaño = document.getElementById("prompt").value.length;
  var posDat = document.getElementById("prompt").value.lastIndexOf("°",tamaño);
  var exDat = document.getElementById("prompt").value.substr(posDat+1,tamaño).toLowerCase();
  exDat = exDat.replace(" ","");
  exDat = exDat.replace(" ","");
  return exDat;
};
