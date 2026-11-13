
// task1

var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var city = prompt("Enter your city:");

console.log("My name is " + name);
console.log("I am " + age + " years old.");
console.log("I live in " + city);




// task2
var birthYear = Number(prompt("Enter your birth year:"));

var currentYear = 2026;

var age = currentYear - birthYear;

console.log("Your birth year is " + birthYear);
console.log("Your age is " + age);




// task3
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));

var total = num1 + num2;

console.log("First Number: " + num1);
console.log("Second Number: " + num2);
console.log("Total: " + total);



// task4
var product = prompt("Enter product name:");
var price = Number(prompt("Enter product price:"));
var quantity = Number(prompt("Enter quantity:"));

var totalBill = price * quantity;

console.log("Product: " + product);
console.log("Price: " + price);
console.log("Quantity: " + quantity);
console.log("Total Bill: " + totalBill);




// task5
var studentName = prompt("Enter student name:");

var english = Number(prompt("Enter English marks:"));
var math = Number(prompt("Enter Math marks:"));
var computer = Number(prompt("Enter Computer marks:"));

var totalMarks = english + math + computer;

console.log("Student Name: " + studentName);
console.log("English: " + english);
console.log("Math: " + math);
console.log("Computer: " + computer);
console.log("Total Marks: " + totalMarks);




// task6
var restaurant = prompt("Enter restaurant name:");

var burger = Number(prompt("Enter burger price:"));
var pizza = Number(prompt("Enter pizza price:"));

var totalBill = burger + pizza;

console.log("Restaurant: " + restaurant);
console.log("Burger: " + burger);
console.log("Pizza: " + pizza);
console.log("Total Bill: " + totalBill);



// task7

var firstName = prompt("Enter first name:");
var middleName = prompt("Enter middle name:");
var lastName = prompt("Enter last name:");

var fullName = firstName + " " + middleName + " " + lastName;

console.log("First Name: " + firstName);
console.log("Middle Name: " + middleName);
console.log("Last Name: " + lastName);
console.log("Full Name: " + fullName);

// task8
var english = Number(prompt("Enter English marks:"));
var math = Number(prompt("Enter Math marks:"));
var computer = Number(prompt("Enter Computer marks:"));
var physics = Number(prompt("Enter Physics marks:"));
var chemistry = Number(prompt("Enter Chemistry marks:"));

var totalMarks = english + math + computer + physics + chemistry;

var percentage = (totalMarks / 500) * 100;

console.log("Total Marks: " + totalMarks + " / 500");
console.log("Percentage: " + percentage + "%");