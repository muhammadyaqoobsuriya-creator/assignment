var num = +prompt("Enter a positive integer");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));


var num = +prompt("Enter a negative floating point number");

document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

var num = +prompt("Enter a number");
var abs = Math.abs(num);

document.write("Absolute value of " + num + " is " + abs);


var dice = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + dice);

var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 1) {
    document.write("Heads");
} else {
    document.write("Tails");
}


var num = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100: " + num);

var weight = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs)");
var parsedWeight = parseFloat(weight);

document.write("Your weight is: " + parsedWeight + " kilograms");


var secret = Math.floor(Math.random() * 10) + 1;
var guess = +prompt("Guess the number between 1 and 10");

if (guess === secret) {
    alert("Congratulations! You guessed the right number!");
} else {
    alert("Sorry! The secret number was " + secret);
}