const team1 = ['Rous', 'Sarah', 'Nova'];
const team2 = ['Jim', 'Leo', 'Chriss'];

const [rosita, sarita] = team1;
console.log(`${rosita} - ${sarita}`); //Rous - Sarah

const all = ['Diego', ...team1, ...team2]
console.log('All members ', JSON.stringify(all)); //["Diego","Rous","Sarah","Nova","Jim","Leo","Chriss"]

if (all.includes('Diego')) {
    console.log('Diego es team member');
}

console.log('\nArrays of arrays\n');
const arraysOfArrays = [team1, team2, ['Diego', ['Luis', 'Jose']]];
console.log(JSON.stringify(arraysOfArrays)); // [["Rous","Sarah","Nova"],["Jim","Leo","Chriss"],["Diego",["Luis","Jose"]]]

const flat1 = arraysOfArrays.flat();
console.log(JSON.stringify(flat1)); //["Rous","Sarah","Nova","Jim","Leo","Chriss","Diego",["Luis","Jose"]]

const flat2 = arraysOfArrays.flat(2);
console.log(JSON.stringify(flat2)); //["Rous","Sarah","Nova","Jim","Leo","Chriss","Diego","Luis","Jose"]