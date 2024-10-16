console.log('IMPLICIT');

var a = 4 + "7";
console.log(a); //47
console.log(typeof a); //string

var b = 2 * "7";
console.log(b); //14
console.log(typeof b); //number

console.log('EXPLICIT');

var numberToString = String(20);
console.log(`numberToString ${numberToString} his type is ${typeof numberToString}`);

console.log('parse int');

console.log(parseInt("123hui12")); //123  , string is analyzed from first number element to first not number element 
console.log(Number("123hui")); //NaN
console.log(Number.parseInt("123hui")); //123
