 var matrix = [
  [0, 1, 2, 3],
   [1, 0, 1, 2],
     [2, 1, 0, 1]
 ];


 for (var i = 0; i < matrix.length; i++) {
     document.write(matrix[i].join(" ") + "<br>");
 }


 for (var i = 1; i <= 10; i++) {
    console.log(i);
 }


 var num = prompt("Enter a number for multiplication table:");
 var length = prompt("Enter length of table:");

 for (var i = 1; i <= length; i++) {
     document.write(num + " x " + i + " = " + (num * i) + "<br>");
 }


 var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

 for (var i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
 }


 for (var i = 1; i <= 15; i++) console.log(i);
 for (var i = 10; i >= 1; i--) console.log(i);
 for (var i = 0; i <= 20; i += 2) console.log(i);
 for (var i = 1; i <= 19; i += 2) console.log(i);
 for (var i = 2; i <= 20; i += 2) console.log(i + "k");


 var A = ["cake", "apple pie", "cookie", "chips", "patties"];
 var searchItem = prompt("Enter item:");

 if (A.indexOf(searchItem) !== -1) {
     alert(searchItem + " is available in the list.");
 } else {
     alert(searchItem + " is not available in the list.");
 }

 var A = [24, 53, 78, 91, 12];
 var largest = A[0];

 for (var i = 1; i < A.length; i++) {
     if (A[i] > largest) largest = A[i];
 }

 console.log("The largest number is: " + largest);

 for (var i = 5; i <= 100; i += 5) {
     console.log(i);
 }