const person = {
    name: 'Diego',
    documentType: 'DNI',
    age: 21
};
const documentNumber = {
    documentNumber: '45454545'
};
const completePerson = { ...documentNumber, ...person };
const samePerson = completePerson;
console.log(JSON.stringify(completePerson), `Is same person ${completePerson === samePerson}`); //{"documentNumber":"45454545","name":"Diego","documentType":"DNI","age":21} Is same person true

const copyPerson = { ...completePerson };
console.log(JSON.stringify(copyPerson), `Is same person ${completePerson === copyPerson}`); //{"documentNumber":"45454545","name":"Diego","documentType":"DNI","age":21} Is same person false

