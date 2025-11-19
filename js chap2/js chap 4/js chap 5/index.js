// addition
var num1 = 5;
    var num2 = 7;
    var sum = num1 + num2;
    document.write("The sum of " + num1 + " and " + num2 + " is: <b>" + sum + "</b>");

    //subtaction
    var num1 = 10;
    var num2 = 3;
    var difference = num1 - num2;
    document.write("<br>the difference of " + num1 + "and" + num2 + "is: <b>" + difference + "</br>")

 //multipliation
    var num1 = 6;
    var num2 = 5;
    var product = num1 * num2;
    document.write("The product of " + num1 + " and " + num2 + " is: " + product);

    //division
    var num1 = 20;
    var num2 = 4;
    var division = num1 / num2;
    document.write("The division of " + num1 + " by " + num2 + " is: " + division);

    //modulos
     var num1 = 10;
    var num2 = 3;
    var modulus = num1 % num2;
    document.write("The remainder of " + num1 + " divided by " + num2 + " is: " + modulus);


    var number;
    document.write("Value after variable declaration is: " + number + "<br>");
    number = 5;
    document.write("Initial value: " + number + "<br>");
    number++;
    document.write("Value after increment is: " + number + "<br>");
    number = number + 7;
    document.write("Value after addition is: " + number + "<br>");
    number--;
    document.write("Value after decrement is: " + number + "<br>");
    var remainder = number % 3;
    document.write("The remainder is: " + remainder);




     var ticketPrice = 600;
    var numberOfTickets = 5;
    var totalCost = ticketPrice * numberOfTickets;
    document.write("Cost of one movie ticket is " + ticketPrice + " PKR.<br>");
    document.write("Cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR.");



    var number = 5; 
    document.write("<h2>Table of " + number + "</h2>");
    for (var i = 1; i <= 10; i++) {
      document.write(number + " x " + i + " = " + (number * i) + "<br>");
    }


    
    var celsius = 25;
    var fahrenheit = (celsius * 9/5) + 32;
    document.write(celsius + "°C is " + fahrenheit + "°F<br><br>");
    var fahrenheitTemp = 70;
    var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
    document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


    var item1Price = 650;
    var item2Price = 100;
    var item1Qty = 3;
    var item2Qty = 7;
    var shippingCharges = 100;
    var totalCost = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;
    document.write("<h2>Shopping Cart Receipt</h2>");
    document.write("Price of item 1 is " + item1Price + " PKR<br>");
    document.write("Quantity of item 1 is " + item1Qty + "<br><br>");
    document.write("Price of item 2 is " + item2Price + " PKR<br>");
    document.write("Quantity of item 2 is " + item2Qty + "<br><br>");
    document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
    document.write("<b>Total cost of your order is " + totalCost + " PKR</b>");




     var totalMarks = 500;
    var marksObtained = 420;
    var percentage = (marksObtained / totalMarks) * 100;
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + marksObtained + "<br>");
    document.write("Percentage: " + percentage + "%");




 var usd = 10;
    var sar = 25;
    var usdToPkr = 104.80;
    var sarToPkr = 28;
    var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);
    document.write("Total currency in Pakistani Rupees: " + totalPkr + " PKR");

    

    var number = 5;
    var result = ((number + 5) * 10) / 2;
    document.write("Result after arithmetic operations: " + result);



      var radius = 7;
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    document.write("The circumference is: " + circumference + "<br>");
    var area = pi * radius * radius;
    document.write("The area is: " + area);




    var favoriteSnack = "Chocolate Chip Cookies";
    var currentAge = 20;
    var maxAge = 80;
    var amountPerDay = 2;
    var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
    document.write("Favorite Snack: " + favoriteSnack + "<br>");
    document.write("Current Age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + maxAge + "<br>");
    document.write("Amount per Day: " + amountPerDay + "<br><br>");
    document.write(
      "You will need <b>" + totalSnacks + "</b> " + favoriteSnack +
      " to last you until the ripe old age of " + maxAge + "."
    );