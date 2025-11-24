var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;

alert("Hello " + fullName);



var mobile = prompt("Enter your favorite mobile phone model");
document.write("Length of input: " + mobile.length);


var word = "Pakistani";
var index = word.indexOf("n");
document.write("Index of 'n': " + index);



var text = "Hello World";
var index = text.lastIndexOf("l");
document.write("Last index of 'l': " + index);

var word = "Pakistani";
var char = word.charAt(3);
document.write("Character at index 3: " + char);


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" ", lastName);

alert("Hello " + fullName);



var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write(newCity);


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write(newMessage);


var str = "472";
var num = Number(str);

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num) + "<br>");


var input = prompt("Enter text");
document.write(input.toUpperCase());

var input = prompt("Enter some text");
var title = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
document.write(title)

var num = 35.36;
var str = num.toString().replace(".", "");
document.write(str);

var username = prompt("Enter username");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username");
} else {
    alert("Username accepted: " + username);
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item to search").toLowerCase();

if (A.includes(search)) {
    alert(search + " is available");
} else {
    alert(search + " is NOT available");
}



var university = "University of Karachi";
var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

var text = prompt("Enter something");
var lastChar = text.charAt(text.length - 1);

document.write("Last character: " + lastChar);


var str = "The quick brown fox jumps over the lazy dog";
var count = str.toLowerCase().split("the").length - 1;

document.write("Number of occurrences of 'the': " + count);

