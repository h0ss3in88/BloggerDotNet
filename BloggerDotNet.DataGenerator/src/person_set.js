const faker = require('faker');
const Person = require('./person');
const emailProvider = {
    0: 'gmail.com',
    1: 'yahoo.com',
    2: 'aol.com'
};

module.exports = (personNumber) => {
    let _persons = [];
    for (let i=0; i <= personNumber; i++) {
        let id = faker.random.uuid();
        let firstname = faker.name.firstName(1);
        let lastname = faker.name.lastName(1);
        let age = faker.random.number({ min: 18, max: 28});
        let email = faker.internet.email(firstname,lastname,emailProvider[faker.random.number({ min: 0, max: 2})]);
        let _person = new Person(`"${id}"`,`"${firstname}"`,`"${lastname}"`,`${age}`,`"${email}"`);
        _persons.push(_person);
    }
    return _persons;
};