//1
let x;
console.log(typeof x); // пустая переменная
//2
console.log(typeof 10); // число
console.log(typeof '10') // строка
//3
console.log(typeof true); // булевые данные
console.log(typeof false);
//4
//undefined - тк делали за кило риса

//5
console.log('15' + 1); // конкотенация
//6
console.log('12' - 1); // происходит арифметическая операция вычитания за счет символа "-"
//7
console.log(Boolean("")) // передаем пустую строку (ничего)
//8
console.log(Boolean(" "))// мы передаем пробел, что считается символом
//9
let a = Number('13'); // явное преобразование в число
console.log(typeof a);
//10
function isNumber(v){
    return typeof v === 'number' 
}
console.log(isNumber('1'))