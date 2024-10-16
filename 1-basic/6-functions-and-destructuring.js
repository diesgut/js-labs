const personName = 'diesgut';
const color = `blue`;
const city = `Lima`;

showMessage(); //N.N.: His favorite color is red and live in Carhuamayo
showMessage(personName, color, city); //diesgut: His favorite color is blue and live in Lima

const person = {
    personName,
    color,
    city
}

showMessageDesctructuring(person); //diesgut: His favorite color is blue and live in Lima

function showMessage(personName = 'N.N.', color = 'red', city = 'Carhuamayo') {
    console.log(`${personName}: His favorite color is ${color} and live in ${city}`);
}

function showMessageDesctructuring({ personName, color, city }) {
    console.log(`${personName}: His favorite color is ${color} and live in ${city}`);
}