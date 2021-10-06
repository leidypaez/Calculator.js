let numberScreen = "0";
let screenWithNumber = "si"; //Si o No
let userPoint = "no"; //Si o No
let numberWaiting = 0;
let operationPending = "";
let solution = "";

const enterNumber = (numbers) => {
  if(numbers != ".") {
		if(numberScreen == "0" || screenWithNumber == "si") {
			document.Calculadora.valueNumber.value = numbers;
			numberScreen = numbers;
		} else if(numbers != ".") {
			document.Calculadora.valueNumber.value += numbers;
			numberScreen += numbers;
		}
  } if(numbers =="." && userPoint=="no" && numberScreen == "0") {
			document.Calculadora.valueNumber.value = "0.";
			numberScreen = numbers;
			userPoint="si";
		} else if(numbers == "." && userPoint == "no") {
			document.Calculadora.valueNumber.value += numbers;
			numberScreen += numbers;
			userPoint = "si";
		} else if(numbers == "." && userPoint == "si") {
  }
	screenWithNumber = "no";
}

const enterOperation = (addValue) => {
  if( operationPending == "") {
		numberWaiting = document.Calculadora.valueNumber.value;
		document.Calculadora.valueNumber.value += addValue;
		operationPending = addValue;
		screenWithNumber = "no";
		numberScreen = "";
		userPoint = "no";
  }
}

const result = () => {
  if(operationPending != "") {
		solution = numberWaiting+operationPending + numberScreen;
		document.Calculadora.valueNumber.value=eval(solution);
		numberScreen = eval(solution);
		screenWithNumber ="si";
		operationPending = "";
		userPoint = "no";
  }
}

const limpiarValue = () => {
	numberScreen = "0";
	screenWithNumber = "si";
	userPoint = "no";
	numberWaiting = 0;
	operationPending = "";
	solution = "";
	document.Calculadora.valueNumber.value = "0";
}