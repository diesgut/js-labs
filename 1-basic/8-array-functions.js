const men = [
    { name: 'Diego', age: 33 },
    { name: 'Juan', age: 25 },
    { name: 'Luis', age: 22 },
    { name: 'Jose', age: 19 },
];

const women = [
    { name: 'Rous', age: 22 },
    { name: 'Sara', age: 23 },
    { name: 'Nova', age: 32 },
    { name: 'Jill', age: 35 },
];
const all = [men, women];
const data = {
    frontend: 'Luis',
    backend: 'Diesgut',
    devOps: 'Jose',
};

console.log('\n Map \n');
//1
let menNames = men.map((man) => man.name);
console.log(menNames); //[ 'Diego', 'Juan', 'Luis', 'Jose' ]

//2
menNames = men.map(function (man) {
    return man.name
});
console.log(menNames); //[ 'Diego', 'Juan', 'Luis', 'Jose' ]

//3
const getName = (man) => man.name;
menNames = men.map(getName);
console.log(menNames); //[ 'Diego', 'Juan', 'Luis', 'Jose' ]


console.log('\n Flatmap \n');
const names = all.flatMap((persons) => persons.map(person => person.name));
console.log(JSON.stringify(names)); //["Diego","Juan","Luis","Jose","Rous","Sara","Nova","Jill"]


console.log('\n Filter \n');
const filteredPersons = all.flat().filter((person) => person.age >= 25);
console.log(JSON.stringify(filteredPersons)); //[{"name":"Diego","age":33},{"name":"Juan","age":25},{"name":"Nova","age":32},{"name":"Jill","age":35}]

console.log('\n Reduce \n');
let sumOfAge = [...men, ...women].reduce((total, person) => total + person.age, 0);
console.log(sumOfAge); //211

console.log('\n Find \n');
const man = men.find((man) => man.age > 22);
console.log(man); //{ name: 'Diego', age: 33 }

console.log('\n Some \n');
let someUnderAge = men.some((man) => man.age < 18);
console.log(someUnderAge); //false

someUnderAge = [{ name: 'David', age: 17 }, ...men].some((man) => man.age < 18);
console.log(someUnderAge); //true

console.log('\n Every \n');
let areAdults = women.every((woman) => woman.age >= 18);
console.log(areAdults); //true

areAdults = [{ name: 'Claire', age: 17 }, ...women].every((woman) => woman.age >= 18);
console.log(areAdults); //false

console.log('\n Splice \n');

const array = [1,2,3]; //or []
console.log(array); //[ 1, 2, 3 ]

const itemsToDelete = 1;
array.splice(0, itemsToDelete, 'A');
array.splice(1, itemsToDelete, 'B');
array.splice(2, itemsToDelete, 'C');

console.log(array); //[ 'A', 'B', 'C' ]

console.log('\n With \n');

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array