//11
function power(base, exp = 2) {
    return base ** exp;
}
console.log(power(2, 2))

//12
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(2))

//13
function floorNumber(n) {
  
    if (n % 1 === 0) {
        return n;
    }
    if (n > 0) {
        return n - (n % 1);
    }
    else {
    return n - (1 + (n % 1));
    }
}
console.log(floorNumber(4.9))
console.log(floorNumber(-2.1))

//14
function inRange(x, a, b) {
    if (a <= b) {
        return x >= a && x <= b;
    } else {
        return x >= b && x <= a;
    }
}
console.log(inRange(10, 5, 15))

//15
function repeatText(text, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += text;
    }
    return result;
}
console.log(repeatText('ha', 3))