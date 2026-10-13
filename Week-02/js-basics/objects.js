let person = {
    name: "Asha",
    age: 25,
    city: "Delhi"
}
console.log(person.name);
console.log(person["city"]);

let key = "age";
console.log(person[key]);
console.log(person.key);

person.age = 26;
person.email = "asha@mail.com";
console.log(person);


let counts = {};
let word = "apple";
counts[word] = 1;
console.log(counts);


const book = {
    title: "Atomic Habits",
    pages: 320
}

console.log(book.title);
let field = "pages";
console.log(book[field]);

book.author = "James Clear";

console.log(book);


console.log(Object.keys(book));
console.log(Object.values(book));
console.log(Object.entries(book));

for (const key of Object.keys(book)) {
    console.log(key, book[key]);
}

const scores = {
    math: 80,
    english: 70,
    science: 90
}

let total = 0;
for (const score of Object.values(scores)) {
    total += score;
}
console.log(total);

