function Comandos(){

}
var ecuacion; // variable donde se guarda la ecuacion
var variable; // variable donde se guarda la variable a despejar
var terminos = new Array(); // array que contiene los terminos de la ecuacion


// funcion del comando help
Comandos.prototype.Help = function () {
    document.getElementById("prompt").value = document.getElementById("prompt").value + "\nCommandos disponibles:";
    document.getElementById("prompt").value = document.getElementById("prompt").value + "\n ecua     para ingresar una ecuacion.";
    document.getElementById("prompt").value = document.getElementById("prompt").value + "\n desp     seleccionar variable a despejar.";
    document.getElementById("prompt").value = document.getElementById("prompt").value + "\n clns     limpiar pantalla.";
};

//funcion para guardar la ecuacion
Comandos.prototype.setEcuacion = function (ecua) {
    ecuacion = ecua.substr(0,ecua.length-1);
};

//funcion para despejar la varible ingresada
Comandos.prototype.Despejar = function (vari) {
    //alert("La ecuacion es: "+ecuacion);
    var contador = 0;
    variable = vari.substr(0,1);
    //verifica que la variable se encuentra en la ecuacion
    for (var i = 0; i < ecuacion.length; i++) {
      if(variable == ecuacion[i]){
        contador++; //sie el contador es 1 no esta y si es 2 esta en la ecuacion
      }
    }
    if(contador>=1){
      //analizador sintactico
      analizar();
      // Realiza el metodo de la secante para hallar el valor
      document.getElementById("prompt").value = document.getElementById("prompt").value + "Resultado:";
      var total = MetodoSecante(anlaizarTerminos());
      document.getElementById("prompt").value = document.getElementById("prompt").value + "Resultado:" + total;
    }else{
      document.getElementById("prompt").value = document.getElementById("prompt").value + "\nNo se encontro la variable. Ingrese otra con >desp.\n";
    }
};

function analizar(){
  var signo = []; // array que contiene la posicion de los signos en el string de la ecuacion
  var j = 0;
  var k = 0;

  // ubica las posiciones donde este el signo + y - en la ecuacion
  while (j < ecuacion.length) {
    if(ecuacion[j] == "-" || ecuacion[j] == "+"){
      if(j>0){
        signo[k] = j;
        k++;
      }
    }
    j++;
  }

  //Separa los terminos y los almacena en el array terminos[]
  var l = 0;
  for (var i = 0; i < signo.length; i++) {
    if(i==1){
      terminos[terminos.length] = ecuacion.substr(l,signo[i]-3);
      l = signo[i];
    }else{
      terminos[terminos.length] = ecuacion.substr(l,signo[i]);
      l = signo[i];
    }

  }
  terminos[terminos.length] = ecuacion.substr(l,ecuacion.length);

  //alert(terminos[0]);
  //alert(terminos[1]);
  //alert(terminos[2]);
}

//funcion que analiza los terminos de la ecuacion
function analizarTerminos(vari){
  var numeros = ["1","2","3","4","5","6","7","8","9","0"];
  var resultado = 0;// donde se almacena el resultado
  var varnum = parseFloat(vari);
  //si la ecuacion es ej: x2+1
  if(terminos.length==2){
    //recorre los terminos de la ecuacion
    for (var i = 0; i < terminos.length; i++) {
        var ter = terminos[i];//se guarda el dato del termino en ter
        for (var j = 0; j < ter.length; j++) {
          //revisa si el caracter es -
          if(ter[i]=="-"){
            //revisa si el caracter es x
            if(ter[i]=="x"){
              var j = 0;
              var cont = 10;
              //revisa si hay numero y cual es
              while (j<numeros.length){
                if(ter[i]==numeros[j]){
                  resultado = resultado - ((varnum) * parseFloat(numeros[j]));// almacena el resultado
                }else{
                  cont--;
                }
              }
              if(cont==0){
                resultado = resultado - ((varnum));
              }
            }
          }else{
            if(ter[i]=="x"){
              var j = 0;
              var cont = 10;
              while (j<numeros.length){
                if(ter[i]==numeros[j]){
                  resultado = resultado + ((varnum) * parseFloat(numeros[j]));
                }else{
                  cont--;
                }
              }
              if(cont==0){
                resultado = resultado + ((varnum));
              }
            }else{
              var j = 0;
              while (j<numeros.length){
                if(ter[i]==numeros[j]){
                  resultado = resultado + parseFloat(numeros[j]);
                }else{
                  cont--;
                }
              }
            }
          }
        }
    }
    return resultado; //retorna el resultado de la ecuacion;
  }else{
    //si la ecuacion es ej: x+2x+1
    if(terminos.length==3){
      //recorre los terminos de la ecuacion
      for (var i = 0; i < terminos.length; i++) {
          var ter = terminos[i];//se guarda el dato del termino en ter
          for (var j = 0; j < ter.length; j++) {
            if(ter[i]=="-"){
              if(ter[i]=="x"){
                if(ter[i]=="^"){
                  var j = 0;
                  while (j<numeros.length){
                    if(ter[i]==numeros[j]){
                      var resu
                    }
                  }
                }
              }
            }else{
            }
          }
      }
    }else{
      document.getElementById("prompt").value = document.getElementById("prompt").value + "\nNo se reconoce la ecuacion.\n";
    }
  }
};

//metodo de la secante
function MetodoSecante(ecuacion){
   var x1 = 0;
   var x0 = 1;
   var metsecante = 0.0;
   var margen = 0.001;
   while (metsecante > margen)
   {
     metsecante = x0 - ((analizarTerminos(x0)*(x1-x0)))/(analizarTerminos(x1)-(analizarTerminos(x0)));
     x1 = x0;
     x0 = metsecante;
   }

}
