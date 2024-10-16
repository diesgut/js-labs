console.log('### Var');
var dogNameVar = 'doki';
let dogNameLet = dogNameVar;
console.log(dogNameLet); //doki
dogNameLet = 'makuto'; //dogNameLet let his reference to dogNameVar

console.log(dogNameVar); //doki
console.log(dogNameLet); //makuto

/*
    var developerName = 'diesgut';
    let developerName = 'diego';
    console.log(developerName);
    //SyntaxError: Identifier 'developerName' has already been declared
*/
{
    var developerName = 'diesgut';
}
{
    let developerName = 'diego';
    console.log(developerName); //diego
}
console.log(developerName); //diesgut



console.log(`personName ${personName}`); //personName undefined
try {
    console.log(`personNameConst ${personNameConst}`);
} catch (error) {
    console.log(error.message); //Cannot access 'personNameConst' before initialization
}
var personName = 'diego';
const personNameConst = 'alex';


console.log('### BigInt');
const minSafeInteger = Number.MIN_SAFE_INTEGER;
const maxSageInteger = Number.MAX_SAFE_INTEGER;

//outside this range, mathematical operations may fail
console.log(JSON.stringify({minSageInteger: minSafeInteger, maxSageInteger})); //{"minSageInteger":-9007199254740991,"maxSageInteger":9007199254740991}

const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber);
console.log(anotherBigNumber);


const miArray = [1, 2, 3 , 4];
const newArray = [];

const moves = 2;
for(i = 0; i < miArray.length; i++){
    let newIndex = i + moves;
    if(newIndex >  miArray.length){
        newIndex = newIndex - miArray.length;
    }
    newArray[newIndex] = miArray[i];
}
console.log(miArray);