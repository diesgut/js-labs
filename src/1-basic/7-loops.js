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

for (i = 0; i < 10; i++) { //this line is similar to var i = 0; i < 10; i++ => where var its a global variable
    setTimeout(() => {
        console.log('index is '+i); // show 'index is 10' for 10 times 
      }, 0);
}

for (let i = 0; i < 10; i++) { //LET create a only context for i in each cycle of for
    setTimeout(() => {
        console.log('index is '+i); // show 'index is 0' to 'index is 10'
      }, 0);
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
