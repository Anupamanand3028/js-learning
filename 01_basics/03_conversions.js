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