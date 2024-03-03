let score = "Anupam"

let scoreInNumber = Number(score)
//console.log(typeof score);
//console.log(typeof scoreInNumber);
//console.log(scoreInNumber);  // NaN

// "34abc" => typebeforeconversion - string | typeafterconversion - number | value - NaN
// null => typebeforeconversion - object | typeafterconversion - number | value - 0
// undefined => typebeforeconversion - undefined | typeafterconversion - number | value - NaN
// true => typebeforeconversion - boolean | typeafterconversion - number | value - 1

let isLoggedIn = "";

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
//console.log(typeof booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "text" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);

//********************Operations***************************
let value = 5
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3)

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2)
// console.log(1+2+"2")

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

console.table([num1, num2, num3])

let gameCounter = 100
//gameCounter++
++gameCounter
console.log(gameCounter);

let age = 18n  // here n represents bigint number
console.log(age);
