const men = [
    { name: 'Diego', age: 22 },
    { name: 'Juan', age: 22 },
    { name: 'Luis', age: 22 },
    { name: 'Jose', age: 22 },
];

const women = [
    { name: 'Rous', age: 22 },
    { name: 'Sara', age: 22 },
    { name: 'Nova', age: 22 },
    { name: 'Jill', age: 22 },
];

const data = {
    frontend : 'Luis',
    backend : 'Diesgut',
    devOps : 'Jose',
};
/*
LOOPS
*/
console.log('\n For \n');
for (i = 0; i < men.length; i++) {
    console.log(`Idex: ${i}, name: ${men[i].name}`);
}

console.log('\n For Of\n');
for (man of men) {
    console.log(`Name: ${man.name}`);
}

console.log('\n For In\n');
for (const property in data) {
    console.log(`Property: ${property}, Value ${data[property]}`);
}

console.log('\n forEach \n'); //call a callback function for each element
women.forEach((woman) => {
    console.log(`Name: ${woman.name}, age ${woman.age}`);
});
