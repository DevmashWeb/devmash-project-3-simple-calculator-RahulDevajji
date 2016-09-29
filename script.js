function show1(){

	document.case.display.value += "1"
};
function show2(){

	document.case.display.value += "2"
};
function show3(){

	document.case.display.value += "3"
};
function show4(){

	document.case.display.value += "4"
};
function show5(){

	document.case.display.value += "5"
};

function show6(){

	document.case.display.value += "6"
};

function show7(){

	document.case.display.value += "7"
};

function show8(){

	document.case.display.value += "8"
};

function show9(){

	document.case.display.value += "9"
};

function show0(){

	document.case.display.value += "0"
};
function add(){

	document.case.display.value += "+"
};
function sub(){

	document.case.display.value += "-"
};
function div(){

	document.case.display.value += "/"
};
function mul(){

	document.case.display.value += "*"
};

function clearD(){

	document.case.display.value = ""
};


function solve(){
	var equal = eval(document.case.display.value)
	document.case.display.value = equal;
}
