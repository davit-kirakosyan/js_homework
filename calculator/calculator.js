

let a = parseFloat(prompt("Entre the first number"));
let optional = prompt("Entre the (+, -, *, /)");
let b = parseFloat(prompt("Entre the second number"));

let result;

switch (optional) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b !== 0) {
            result = a / b;
        } else {
            alert("Cannot divide by zero");
        }
        break;
}


if (result !== undefined) {
    alert(result);
}