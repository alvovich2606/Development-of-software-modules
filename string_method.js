//1
let str1 = 'JavaScript'
console.log(str1.slice(4))

//2
function name2(str){
    return str.startsWith("rep") && str.endsWith(".pdf")
}
console.log(name2('report.pdf'))

//3
let str3 = 'I like cats'
let new_str3 = str3.replace('cats', 'dogs')
console.log(new_str3)

//4
let str4 = 'apple,banana,orange,apple'
let arr = str4.split(',')
let count = arr.filter(word => word === "apple").length;
console.log(count)

//5 
let str5 = "My phone number is 12345 and my code is 67890"
let result5 = ''
for (let char of str5){
    if (char >= '0' && char <= '9'){
        result5 += char
    }
}
console.log(result5)

//6
let str6 = 'Hello World From JS'
console.log(str6.slice(0, 5).toLowerCase() + str6.slice(5))

//7
let str7 = "JavaScript is a cool language"
let new_str7 = str7.replace("cool", "****")
console.log(new_str7)

//8
let str8 = "user@example.com"
if (str8.includes("@") && str8.includes(".")){
    console.log('Email valid')
}
else{
    console.log('Invalid')
}
//9
function json(a){
    let arr = a.split(" ")
    result = ""
    for (let i of arr){
        result += i[0].toUpperCase()
    }
    return result
}
console.log(json('Java Script Object Notation'))

//10
let str10 = "I love learning JavaScript programming"
let new_str = str10.split(" ")
let first = new_str[0]
for (let i of new_str){
    if (i.length > first.length){
        first = i
    }
}
console.log(first)
