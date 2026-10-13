let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);

fruits.push("grape");
console.log(fruits);
console.log(fruits.length);


for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}

function sum(numbers) {
    let total = 0;
    for (const num of numbers) {
        total = total + num;
    }

    return total;
}

console.log(sum([10, 20, 30]));