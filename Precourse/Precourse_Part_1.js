function addTwo(number) {
    return number += 2;
}

// console.log(addTwo(4));

function add(num1, num2) {
    return num1 + num2;
}

// console.log(add(2,12));

function addd(val1, val2, val3) {
    return val1 + val2 + val3;
}

// console.log(addd(10, 4, 6));

function subtract(n1, n2) {
    return n1 - n2;
}

// console.log(subtract(5, 10));

function multiplyByTwo(numero) {
    return numero *= 2;
}

// console.log(multiplyByTwo(14));

function multiply(val1, val2) {
    return val1 * val2;
}

// console.log(multiply(5, 3));

function multiplyy(a, b, c) {
    return a * b * c;
}

// console.log(multiplyy(1, 2, 3));
// console.log(multiplyy(2, 2, 3));

function square(value) {
    return value * value;
}

// console.log(square(5));

function isOdd(num) {
    if (num % 2 === 0) return false;
    else return true;
}

// console.log(isOdd(4));
// console.log(isOdd(5));

function isNegative(num) {
    if (num < 0) return true;
    else return false;
}

// console.log(isNegative(-10));
// console.log(isNegative(10));
// console.log(isNegative(0));

function positive(num) {
    return Math.abs(num);
}

// console.log(positive(-1));
// console.log(positive(1));


function isNumber(value) {
    if (typeof value === 'number') return true;
    else return false;
}

// console.log(isNumber(5));
// console.log(isNumber('hi'));

function isArray(value) {
    if(Array.isArray(value)) return true;
    else return false;
}

// console.log(isArray(5));
// console.log(isArray([1, 2, 3]));

function isObject(value) {
    if (typeof value === 'object') return true;
    else return false;
}

const cache = {
    first: 1,
    second: 2,
    third: 3
}

// console.log(isObject(5));
// console.log(isObject(cache));

function isNull(value) {
    if (value === null) return true;
    else return false;
}

console.log(isNull(null));
console.log(isNull(5));

