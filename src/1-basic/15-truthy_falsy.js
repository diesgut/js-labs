console.log('FALSE VALUES');

console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(false)); //false
console.log(Boolean("")); //false

console.log('TRUE VALUES');
console.log(`${Boolean(1)} -- ${Boolean(-1)}`); //true -- true, any number different than zero its true
console.log(`${Boolean('a')} -- ${Boolean('a')}`); //true -- true, anu character or whitespace its true
console.log(Boolean([])); //true
console.log(Boolean({})); //true
console.log(Boolean(function(){})); //true