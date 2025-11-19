


  
    var number = 10;
    document.write("The value of the number is: " + number + "<br><br>");
    var addResult = number + 5;
    document.write("After adding 5: " + addResult + "<br>");
    var subResult = addResult - 3;
    document.write("After subtracting 3: " + subResult + "<br>");
    var mulResult = subResult * 2;
    document.write("After multiplying by 2: " + mulResult + "<br>");
    var divResult = mulResult / 4;
    document.write("After dividing by 4: " + divResult + "<br>");
    var modResult = divResult % 3;
    document.write("Remainder after dividing by 3: " + modResult + "<br>");




    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("a = " + a + "<br>");
    document.write("b = " + b + "<br>");
    document.write("result = " + result);



    var userName = prompt("Enter your name:");
    document.write("<h2>Greeting</h2>");
    document.write("Hello, " + userName + "! Welcome to our website.<br><br>");
    var number = prompt("Enter a number for multiplication table:");
    if (number === "" || number === null) {
      number = 5;
    }
    number = parseInt(number);

    document.write("<h2>Multiplication Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }
    document.write("<br>");
    var subject1 = prompt("Enter name of first subject:");
    var subject2 = prompt("Enter name of second subject:");
    var subject3 = prompt("Enter name of third subject:");
    var totalMarks = 100;
    var marks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
    var marks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
    var marks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
    var totalObtained = marks1 + marks2 + marks3;
    var percentage = (totalObtained / (totalMarks * 3)) * 100;
    document.write("<h2>Student Marks Sheet</h2>");
    document.write("<table border='1' cellpadding='5'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + ((marks1 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + ((marks2 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + ((marks3 / totalMarks) * 100).toFixed(2) + "%</td></tr>");
    document.write("<tr><th>Total</th><th>" + (totalMarks*3) + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
    document.write("</table>");