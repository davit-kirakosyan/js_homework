let array = [2, 5, 8, 10, 32, 22, 11, 66, 12, 30];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("----------------------------------------")

let max = array[0];
let i = 0;
while (i < array.length) {
    if (max < array[i]) {
        max = array[i];
    }
    i++;
}
console.log("----------------------------------------")
console.log("max: " + max);

let min = array[0];
while (i < array.length) {
    if (min > array[i]) {
        min = array[i];
    }
    i++;
}
console.log("----------------------------------------");
console.log("min: " + min);


let evenCount = 0;
for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 0) {
        console.log(array[j]);
        evenCount++;
    }
}
console.log("----------------------------------------");
console.log("even count: " + evenCount);

let oddCount = 0;
for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 !== 0) {
        console.log(array[j]);
        oddCount++;
    }
}

console.log("----------------------------------------");
console.log("odd count: " + oddCount);

console.log("----------------------------------------");
let sum = 0;
for (let j = 0; j < array.length; j++) {
    sum += array[j];
}
console.log("sum: " + sum);

console.log("----------------------------------------");
console.log(sum / array.length);

console.log("----------------------------------------");
console.log("first element array: " + array[0]);

console.log("----------------------------------------");
console.log("last element array: " + array[array.length - 1]);

console.log("----------------------------------------");
console.log("middle element array: " + array[array.length /2]);


let numbers = [43, 55, 5, -9, 0, 12, 6, 65];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("----------------------------------------");
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}