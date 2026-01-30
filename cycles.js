//1
let n1 = -5;
if (n1 > 0) {
    console.log("positive");
} else if (n1 < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//2
let a = 5, b = 10
console.log(a > b ? a : b)

//3
let n3 = 15
console.log(n3 % 3 === 0 ? 'yes' : 'no')

//4
let n4 = 7
sum4 = 0
for  (let i = 0; i <= n4; i++){
    sum4+= i 
}
console.log(sum4)

//5
for (let i = 0; i <= 15; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

//6
let n6 = 0
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        n6 += 1
    }
}
console.log(n6)

//7
n7 = 0
let str7 = 'banana'
for (i of str7){
    if (i === 'a'){
        n7 += 1
    }
}
console.log(n7)

//8
let str8 = 'hello'
let reversed8 = ""
for (let i = str8.length - 1; i >= 0; i--) {
    reversed8 += str8[i];
}
console.log(reversed8)

//9
let num9 = 4
for (let i = 0; i <= 10; i++){
     console.log(`${num9} * ${i}`)
}

//10
let str10 = '*'
for (let i = 1; i <= 4; i++){
    console.log(str10)
    str10 += '*'
}
// или же через repeat()
for (let i = 1; i <= 4; i++){
    console.log('*'.repeat(i))
}

