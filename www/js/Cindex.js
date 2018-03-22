var flag; // variable flag para identificar datos y comandos
var dato; //varibale donde se guarda la ecuacion
var com; //variable para identificar el comandos

//funcion para detectar el enter en el prompt
function exe(e, textarea){
	var code = (e.keyCode ? e.keyCode : e.which);
  if(code == 13) {
    var capturar = new Capturar(); // Objeto de la clase Capturar
		var comando = new Comandos(); // Objeto de la clase Comandos
		//verifica si el flag es 1 para comandos y 2 para datos
		if(flag == 1 || flag == undefined){
			switch (capturar.ExtraerComando()) {
					// comando help
	        case "help":
	          comando.Help();
						flag = 1;
	          break;
					// comando para ingresar ecuacion
					case "ecua":
						document.getElementById("prompt").value = document.getElementById("prompt").value + "\nIngrese la ecuacion despues del ° despues coloque el comando >desp:";
			    	document.getElementById("prompt").value = document.getElementById("prompt").value + "\n°";
						flag = 2;
						com = "ec";
						break;
						// comando para despejar una variable
					case "desp":
						document.getElementById("prompt").value = document.getElementById("prompt").value + "Ingrese la variable a despejar despues de °:";
						document.getElementById("prompt").value = document.getElementById("prompt").value + "\n°";
						com = "de";
						flag=2
						break;
						//comando para limpiar pantalla
					case "clns":
						document.getElementById("prompt").value = ">";
						break;
						//en caso de que el comando no exista
	        default:
	          document.getElementById("prompt").value = document.getElementById("prompt").value +'\n"'+capturar.ExtraerComando()+'" ';
						document.getElementById("prompt").value = document.getElementById("prompt").value + "no se reconoce como un comando ejecutable.";
						document.getElementById("prompt").value = document.getElementById("prompt").value + "\nIngrese help para ver la lista de comandos."
						document.getElementById("prompt").value = document.getElementById("prompt").value + "\nForma de ingresar comandos: >'Comando'";
			}
		}else{
			if(flag==2){
				//verifica el codigon del comando
				if(com == "ec"){
					dato = capturar.ExtraerDato(); // extrae el dato del prompt
					comando.setEcuacion(dato); // envia el dato (ecuacion) al la funcion setEcuacion
					flag = 1;
				} else {
					if(com == "de"){
						dato = capturar.ExtraerDato(); // extrae el dato del prompt
						comando.Despejar(dato); // envia el dato (variable) al la funcion Despejar
						flag = 1;
					}
				}
			}
		}
	}
}
