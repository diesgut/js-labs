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

//declarative form, may be call before his declaration, hoisting is applied to them
function showMessage(personName = 'N.N.', color = 'red', city = 'Carhuamayo') {
    console.log(`${personName}: His favorite color is ${color} and live in ${city}`);
}

function showMessageDesctructuring({ personName, color, city }) {
    console.log(`${personName}: His favorite color is ${color} and live in ${city}`);
}

//expression function, can not be call before his declaration, hoisting IS NOT applied to them
try {
    myExpressionFunction('beto');
} catch (error) {
    console.error('this call gives an error', error);
}

const myExpressionFunction = function(name) {
    console.log(`this is a expression function with name ${name}`);
}
const myExpression2 = () => {
    console.log(`this is a expression function 2 with name ${name}`);
}
myExpressionFunction('diego');