var studentNames = [];
var studentNames = new Array(); 
var stringsArray = ["Apple", "Banana", "Cherry"];
var numbersArray = [10, 20, 30, 40, 50];
var booleanArray = [true, false, true, false];
var mixedArray = ["Ali", 25, true, 5.5];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write(qualifications.join("<br>"));



var names = ["Ali", "Hamza", "Sara"];
var scores = [400, 350, 480];
var total = 500;

for (var i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / total * 100) + "%<br>");
}


var colors = ["Red", "Green", "Blue"];
document.write(colors + "<br>");
colors.unshift(prompt("Enter a color to add at the beginning:"));
document.write(colors + "<br>");
colors.push(prompt("Enter a color to add at the end:"));
document.write(colors + "<br>");
colors.unshift("Black", "White");
document.write(colors + "<br>");
colors.shift();
document.write(colors + "<br>");
colors.pop();
document.write(colors + "<br>");
var index = +prompt("Enter index to add a color:");
var colorName = prompt("Enter color name:");
colors.splice(index, 0, colorName);
document.write(colors + "<br>");
var indexDel = +prompt("Enter index to delete color(s):");
var countDel = +prompt("How many colors to delete?");
colors.splice(indexDel, countDel);
document.write(colors + "<br>");




var scores = [320, 230, 480, 120];
scores.sort();
document.write(scores);

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3); 
document.write(selectedCities);



var arr = ["This", " is", " my", " cat"];
var result = arr.join("");
document.write(result);



var queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
document.write(queue.shift() + "<br>");
