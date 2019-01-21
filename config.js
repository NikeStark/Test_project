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
for (i = 0; i<10; i++){
	console.log(i--);
}







