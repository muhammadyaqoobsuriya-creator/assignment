// 1. City Name
    var city = prompt("Enter city name:");
    if(city.toLowerCase() === "karachi"){
      document.write("Welcome to city of lights<br><br>");
    }

    // 2. Gender
    var gender = prompt("Enter your gender (male/female):");
    if(gender.toLowerCase() === "male"){
      document.write("Good Morning Sir<br><br>");
    } else if(gender.toLowerCase() === "female"){
      document.write("Good Morning Ma’am<br><br>");
    }

    // 3. Traffic Signal
    var color = prompt("Enter traffic signal color (Red/Yellow/Green):");
    if(color.toLowerCase() === "red"){
      document.write("Must Stop<br><br>");
    } else if(color.toLowerCase() === "yellow"){
      document.write("Ready to move<br><br>");
    } else if(color.toLowerCase() === "green"){
      document.write("Move now<br><br>");
    }

    // 4. Remaining Fuel
    var fuel = parseFloat(prompt("Enter remaining fuel in liters:"));
    if(fuel < 0.25){
      document.write("Please refill the fuel in your car<br><br>");
    }

    // 5. Condition Checks
    var a = 4;
    if(++a === 5) alert("given condition for variable a is true");

    var b = 82;
    if(b++ === 83) alert("given condition for variable b is true");

    var c = 12;
    if(c++ === 13) alert("condition 1 is true");
    if(c === 13) alert("condition 2 is true");
    if(++c < 14) alert("condition 3 is true");
    if(c === 14) alert("condition 4 is true");

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if(totalCost === laborCost + materialCost) alert("The cost equals");

    if(true) alert("True");
    if(false) alert("False");

    if("car" < "cat") alert("car is smaller than cat");

    // 6. Marks & Grades
    var subj1 = prompt("Enter name of first subject:");
    var subj2 = prompt("Enter name of second subject:");
    var subj3 = prompt("Enter name of third subject:");
    var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));
    var marks1 = parseFloat(prompt("Enter obtained marks for " + subj1 + ":"));
    var marks2 = parseFloat(prompt("Enter obtained marks for " + subj2 + ":"));
    var marks3 = parseFloat(prompt("Enter obtained marks for " + subj3 + ":"));
    var totalObtained = marks1 + marks2 + marks3;
    var percentage = (totalObtained / (totalMarks*3))*100;
    var grade = "", remarks = "";
    if(percentage >= 80){ grade="A-one"; remarks="Excellent"; }
    else if(percentage >=70){ grade="A"; remarks="Good"; }
    else if(percentage >=60){ grade="B"; remarks="You need to improve"; }
    else { grade="Fail"; remarks="Sorry"; }

    document.write("<h2>Marks Sheet</h2>");
    document.write("Total Marks: " + (totalMarks*3) + "<br>");
    document.write("Marks Obtained: " + totalObtained + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks + "<br><br>");

    // 7. Guess Game
    var secretNumber = Math.floor(Math.random()*10)+1; // 1-10
    var guess = parseInt(prompt("Guess the secret number (1-10):"));
    if(guess === secretNumber){
      document.write("Bingo! Correct answer<br><br>");
    } else if(guess+1 === secretNumber || guess-1 === secretNumber){
      document.write("Close enough to the correct answer<br><br>");
    } else {
      document.write("Wrong guess. Secret number was " + secretNumber + "<br><br>");
    }

    // 8. Divisible by 3
    var num = parseInt(prompt("Enter a number to check divisibility by 3:"));
    if(num % 3 === 0){
      document.write(num + " is divisible by 3<br><br>");
    }

    // 9. Even or Odd
    var num2 = parseInt(prompt("Enter a number to check even or odd:"));
    if(num2 % 2 === 0){
      document.write(num2 + " is even<br><br>");
    } else {
      document.write(num2 + " is odd<br><br>");
    }

    // 10. Temperature Check
    var temp = parseFloat(prompt("Enter temperature in °C:"));
    if(temp > 40) document.write("It is too hot outside.<br><br>");
    else if(temp > 30) document.write("The Weather today is Normal.<br><br>");
    else if(temp > 20) document.write("Today's Weather is cool.<br><br>");
    else if(temp > 10) document.write("OMG! Today’s weather is so Cool.<br><br>");

    // 11. Simple Calculator
    var num1 = parseFloat(prompt("Enter first number for calculator:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var operator = prompt("Enter operation (+, -, *, /, %):");
    var calcResult;
    if(operator === "+") calcResult = num1 + num2;
    else if(operator === "-") calcResult = num1 - num2;
    else if(operator === "*") calcResult = num1 * num2;
    else if(operator === "/") calcResult = num1 / num2;
    else if(operator === "%") calcResult = num1 % num2;
    else calcResult = "Invalid operator";

    document.write("Result of " + num1 + " " + operator + " " + num2 + " = " + calcResult + "<br>");