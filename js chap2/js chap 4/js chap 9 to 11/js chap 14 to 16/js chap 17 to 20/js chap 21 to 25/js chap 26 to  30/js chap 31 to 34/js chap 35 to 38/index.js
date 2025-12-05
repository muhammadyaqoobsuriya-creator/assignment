function showDateTime() {
    var now = new Date();
    document.write(now);
}
showDateTime();


function greet(first, last) {
    var fullName = first + " " + last;
    alert("Hello " + fullName + "!");
}
greet("Muhammad", "Yaqoob");


function addNumbers() {
    var num1 = +prompt("Enter first number:");
    var num2 = +prompt("Enter second number:");
    return num1 + num2;
}
document.write(addNumbers());


function calculator(num1, num2, op) {
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
    if (op === "/") return num1 / num2;
    return "Invalid operator";
}
document.write(calculator(10, 5, "+"));



function square(num) {
    return num * num;
}
document.write(square(5));


function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
document.write(factorial(5));


function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
counting(1, 10);


function calculateHypotenuse(base, perpendicular) {
    
    function calculateSquare(x) {
        return x * x;
    }

    var hyp = Math.sqrt(
        calculateSquare(base) + calculateSquare(perpendicular)
    );

    return hyp;
}

document.write(calculateHypotenuse(3, 4));


function area(width, height) {
    return width * height;
}
document.write(area(10, 20));



var w = 15;
var h = 25;
document.write(area(w, h));


function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

document.write(isPalindrome("madam"));



function capitalizeWords(str) {
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

document.write(capitalizeWords("the quick brown fox"));



function longestWord(str) {
    var words = str.split(" ");
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

document.write(longestWord("Web Development Tutorial"));




function countLetter(str, letter) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

document.write(countLetter("JSResourceS.com", "o"));



function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference.toFixed(2));
}

calcCircumference(10);

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("<br>The area is " + area.toFixed(2));
}

calcArea(10);