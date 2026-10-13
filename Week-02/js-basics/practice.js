console.log("Hello");

let city = "Delhi";
console.log(city);


city = "Mumbai";
console.log(city);

const country = "India";

let age = 25;
let isStudent = true;

console.log(typeof city);
console.log(typeof age);
console.log(typeof isStudent);

console.log(age + 5);
console.log(age - 5);
console.log(age * 2);
console.log(age / 2);


console.log(10 % 3);
console.log(10 % 2);

console.log(age > 18);
console.log(age === 25);
console.log(age === "25");

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

console.log(age > 30 && isStudent);
console.log(age > 30 || isStudent);

let marks = 72;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else {
    console.log("C");
}