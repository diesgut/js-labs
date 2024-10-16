const sets = new Set();
sets.add(1);
sets.add(2);
sets.add(3);
sets.add(3);
sets.add(3);

console.log(sets); //Set(3) { 1, 2, 3 }


const array = [1, 1, 2, 2, 3, 4, 4, 5]
const sets2 = [...new Set(array)];
console.log(sets2); //[ 1, 2, 3, 4, 5 ]

console.log(sets.has(1)); //true
console.log(sets.delete(1)); //true
console.log(sets); //Set(2) { 2, 3 }