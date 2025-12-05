var now = new Date();
document.write(now);

var months = ["January","February","March","April","May","June","July",
              "August","September","October","November","December"];

var now = new Date();
alert(months[now.getMonth()]);


var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

var now = new Date();
alert(days[now.getDay()]);


var day = new Date().getDay();

if(day === 0 || day === 6){
    alert("It's Fun day");
}


var date = new Date().getDate();

if(date < 16){
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}


var d = new Date();
var minutes = d.getTime() / (1000 * 60);
document.write(minutes);



var hours = new Date().getHours();

if(hours < 12){
    alert("It's AM");
} else {
    alert("It's PM");
}


var laterDate = new Date("December 31, 2020");
document.write(laterDate);


var ramadanStart = new Date("June 18, 2015");
var today = new Date();

var diff = today - ramadanStart; 
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

alert(days + " days have passed since 1st Ramadan, 2015");


var referenceDate = new Date(); 
var start2015 = new Date("January 1, 2015");

var seconds = (referenceDate - start2015) / 1000;

document.write(seconds + " seconds have passed since Jan 1, 2015");


var d = new Date();
var currentHours = d.getHours();

d.setHours(currentHours + 1);

document.write("Updated date/time: " + d);

var age = prompt("Enter your age:");
var year = new Date().getFullYear() - age;

document.write("Your birth year is " + year);


var customerName = "Muhammad Yaqoob";
var month = "February";
var units = 350;
var chargesPerUnit = 20;

var netAmount = (units * chargesPerUnit).toFixed(2);
var lateSurcharge = 500;
var grossAmount = (parseFloat(netAmount) + lateSurcharge).toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + month + "<br>");
document.write("Number of Units: " + units + "<br>");
document.write("Charges Per Unit: " + chargesPerUnit + "<br><br>");

document.write("Net Amount Payable (Within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");
document.write("Gross Amount Payable (After Due Date): " + grossAmount);
