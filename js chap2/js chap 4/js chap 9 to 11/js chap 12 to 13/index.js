let char = prompt("Enter any character: ");

let ascii = char.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("It is a number");
} 
else if (ascii >= 65 && ascii <= 90) {
    console.log("It is an uppercase letter");
} 
else if (ascii >= 97 && ascii <= 122) {
    console.log("It is a lowercase letter");
} 
else {
    console.log("It is neither number nor letter");
}




let num1 = +prompt("Enter first integer: ");
let num2 = +prompt("Enter second integer: ");

if (num1 > num2) {
    console.log("Larger number is: " + num1);
} 
else if (num2 > num1) {
    console.log("Larger number is: " + num2);
} 
else {
    console.log("Both numbers are equal");
}




let num = +prompt("Enter a number: ");

if (num > 0) {
    console.log("Number is Positive");
} 
else if (num < 0) {
    console.log("Number is Negative");
} 
else {
    console.log("Number is Zero");
}



var ch = prompt("Enter a character:").toLowerCase();

if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log(true);
} else {
    console.log(false);
}



var correctPassword = "12345";

var userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}



if (hour < 18) {
    greeting = "Good day";
}else {
    greeting = "Good evening";
}



var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}




var time = +prompt("Enter time in 24-hour format (e.g. 1900):");

if (time >= time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} else {
    console.log("Invalid time format");
}
