const men = [
    { name: 'Diego', age: 22 },
    { name: 'Juan', age: 22 },
    { name: 'Luis', age: 22 },
    { name: 'Jose', age: 22 },
];

const data = {
    frontend : 'Luis',
    backend : 'Diesgut',
    devOps : 'Jose',
};

console.log('\n Entries \n');
const entryArray = Object.entries(men);
const entryObject = Object.entries(data);

console.log(JSON.stringify(entryArray)); // [["0",{"name":"Diego","age":22}],["1",{"name":"Juan","age":22}],["2",{"name":"Luis","age":22}],["3",{"name":"Jose","age":22}]]
console.log(JSON.stringify(entryObject)); // [["frontend","Luis"],["backend","Diesgut"],["devOps","Jose"]]

console.log('\n Values \n');
const valuesArrays = Object.values(men);
const valuesObject = Object.values(data);

console.log(JSON.stringify(men)); //[{"name":"Diego","age":22},{"name":"Juan","age":22},{"name":"Luis","age":22},{"name":"Jose","age":22}] --no changes
console.log(valuesObject); //[ 'Luis', 'Diesgut', 'Jose' ] -- keys are ignored, only showing values

console.log('\n From Entries \n');
const entries = new Map ([["name", "alexa"], ["age", 24]]);
console.log(entries); //Map(2) { 'name' => 'alexa', 'age' => 24 }
console.log(Object.fromEntries(entries)); //{ name: 'alexa', age: 24 }