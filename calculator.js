let numberScreen= "0";
let screenWithNumber= "si"; //Si o No
let userPoint= "no"; //Si o No
let numberWaiting= 0;
let operationPending= "";
let solution= "";

const enterNumber = (x) => {
  if(x!=".") {
		if(numberScreen=="0" || screenWithNumber=="si") {
			document.Calculadora.txtboxnros.value=x;
			numberScreen=x;
		} else if(x!=".") {
			document.Calculadora.txtboxnros.value+=x;
			numberScreen+=x;
		}
  } if(x=="." && userPoint=="no" && numberScreen=="0") {
			document.Calculadora.txtboxnros.value="0.";
			numberScreen=x;
			userPoint="si";
		} else if(x=="." && userPoint=="no") {
			document.Calculadora.txtboxnros.value +=x;
			numberScreen +=x;
			userPoint="si";
		} else if(x =="." && userPoint =="si") {
  }
	screenWithNumber = "no";
}

const enterOperation = (y) => {

  if( operationPending == "") {
		numberWaiting =document.Calculadora.txtboxnros.value;
		document.Calculadora.txtboxnros.value +=y;
		operationPending = y;
		screenWithNumber = "no";
		numberScreen = "";
		userPoint = "no";
  }
}

const result = () => {

  if(operationPending != "") {
		solution=numberWaiting+operationPending+numberScreen;
		document.Calculadora.txtboxnros.value=eval(solution);
		numberScreen=eval(solution);
		screenWithNumber="si";
		operationPending = "";
		userPoint = "no";
  }
}

const raiz = () => {

  if(operationPending == "") {
		document.Calculadora.txtboxnros.value=Math.sqrt(numberScreen);
		screenWithNumber = "no";
		operationPending = "";
		userPoint = "no";
  }
}

const limpiarValue = () => {

	numberScreen= "0";
	screenWithNumber= "si";
	userPoint= "no"; 
	numberWaiting= 0;
	operationPending= "";
	solution= "";
	document.Calculadora.txtboxnros.value= "0";
}