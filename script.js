function show1(){

	document.calc.display.value += "1"
};
function show2(){

	document.calc.display.value += "2"
};
function show3(){

	document.calc.display.value += "3"
};
function show4(){

	document.calc.display.value += "4"
};
function show5(){

	document.calc.display.value += "5"
};

function show6(){

	document.calc.display.value += "6"
};

function show7(){

	document.calc.display.value += "7"
};

function show8(){

	document.calc.display.value += "8"
};

function show9(){

	document.calc.display.value += "9"
};

function show0(){

	document.calc.display.value += "0"
};
function add(){

	document.calc.display.value += "+"
};
function sub(){

	document.calc.display.value += "-"
};
function div(){

	document.calc.display.value += "/"
};
function mul(){

	document.calc.display.value += "*"
};

function clearD(){

	document.calc.display.value = ""
};
function solve(){
	var equal = eval(document.calc.display.value)
	document.calc.display.value = equal;
}
