let chars = ['j', 'a', 'v', 'a', 'l', 'o', 'l', 'a'];

let c = 'o';
let count = 0;

for (let i = 0; i < chars.length; i++) {
    if (c === chars[i]) {
        count++;
    }
}
console.log(count);

console.log("-------------------------------");
console.log(chars[(chars.length / 2) - 1]);
console.log(chars[chars.length / 2]);

if (chars[chars.length - 2] === 'l' && chars[chars.length - 1] === 'y') {
    console.log(true);
} else {
    console.log(false);
}

let text = [' ', ' ', 'b', 'a', 'r', 'e', 'v', ' ', ' '];

for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
        console.log(text[i]);
    }
}

let spaceArray = [' ', 'c', 'a', 't', ' ', 'b', 'i', ' ', 'b', ' ', ' '];

let startIndex = 0;
let endIndex = spaceArray.length - 1;

while (startIndex < endIndex && spaceArray[startIndex] === ' ') {
    startIndex++;
}

while (startIndex < endIndex && spaceArray[endIndex] === ' ') {
    endIndex--;
}

let result = [(endIndex - spaceArray) + 1];
let index = 0;
for (let i = startIndex; i <= endIndex; i++) {
    result[index++] = spaceArray[i];
}

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}