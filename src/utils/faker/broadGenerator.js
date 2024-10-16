const { faker } = require("@faker-js/faker");

const CURRENCY = {
    PEN: "PEN",
    CLP: "CLP",
    USD: "USD",
}
const DOCUMENT_TYPE = {
    DNI: "001",
    PASSPORT: "002",
}

const operationDateTime = faker.date.between({ from: '2024-09-28', to: '2024-12-12' }).toISOString().split('T');
const broad = {
    operationDate: operationDateTime[0].replace(/-/g, ''),
    operationTime: operationDateTime[1].split('.')[0].replace(/:/g, ''),
    documentType: faker.helpers.arrayElement(Object.values(DOCUMENT_TYPE)),
    documentNumber: faker.string.numeric(8).padStart(10, ' '),
    firstName: faker.person.firstName().padStart(20, ' '),
    lastName: faker.person.lastName().padStart(20, ' '),
    currency: faker.helpers.arrayElement(Object.values(CURRENCY)).padStart(4, ' '),
    amount: faker.number.float({
        min: 1,
        max: 999,
        fractionDigits: 2
    }).toString().padStart(8, ' '),
}

console.log(`"${Object.values(broad).join('')}"`);