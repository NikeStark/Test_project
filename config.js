document.write ("Hello world"+"<br>");

//alert("Good evening my user!!!");

//work with variables
var test = 1.50;
var Test = 2.00; //the names have a feelings to register
var bool = true; //boolean operations/true or false
console.log(Test);

var test_two = "Glad to see you";
alert(test_two);

/*var name = prompt("What's your name? Introduce yourself please");
document.write("My name is: " + name);*/

var firstNum = 25;
firstNum -= 20; //short any variables with different values
var secondNum = 25;
secondNum -=5;
secondNum++;
document.write("Result: ", firstNum+secondNum + "<br>");
document.write("PI = " + Math.PI + "<br>"); //math functions
document.write("Round = " + Math.round(2.6) + "<br>"); //math function more or less number

//Massives

// var colors = ["Red", "Blue", "Green", "Yellow"] 
var colors = new Array ("Red", "Blue", "Green", "Yellow"); //another way for writing
colors[4]="Gray"; // adding additional massive or with help command colors.push = " ";
document.write("Color is: " + colors[4] + " " + colors[0] + "<br>");

// Cycles - we can enter different parametres many times
for (i = 10; i<=100; i+=10){
	console.log("Result: "+i);
}

for (i = 90; i>=10; i-=10){
	console.log("Result: "+i);
}

//difference in different parts another way
var i = 200;
while(i >= 10){
console.log("I love programming"+i);
i/=2;
}


//do it once
var i = 100;
do{
console.log(i);
i+=100;
}while(i <= 1000);

//Dinamic massive
var Colors = [1,2,3,4,5,6,7,8,9,10];
for(var i = 0; i < Colors.length; i++){ //if you have one string yon don't need a parentheses
	console.log(Colors[i]);
}

//Candithional operators
if (1 == 2) {
	console.log("unit = unit");
} else if (1 != 1) {
	console.log("incorrect decision");
} else {
	console.log("without decision");
}

var numOne = 20;
var numTwo = 30;
if(numOne >= numTwo){
	console.log("It's incorrect decision");
} else if (numOne != numTwo) {
	console.log("It's true");
} else {
	console.log("Without any decision");
}

var bool = false;
if(bool == true){
	console.log(bool+" - it isn't right"); // just once!!! next step doesn't work
} else if (!bool) { //this record means same that's bool == ...
	console.log(bool+" - it is right");
} else {
	console.log("Not result");
}

// string is code (!bool && numTwo == 30) this is and or (!bool || numTwo == 30) - this means like OR (any conditional true)

var res = 2;
switch (res){
case 1:
	alert("Res is 1");
	break;
case 2:
	alert("Res is 2");
	break;
case 3:
	alert("Res is 3");
	break;
default: //if you don't have decision for message
	alert("Not result");
}

//Functionals

function write (word){
	document.write(word);
}
	write("This is your right function");
	write("<br>");
	write("You can use it many times"+"<br>");

function summ (a, b) {
	return a + b;
}
	document.write("Summ = "+summ (15, 15));