const generator = require('../src/person_set');
const uuid = require('uuid');
const validator = require('validator');
const should = require('should');
describe('person data set generator spec', function() {
    describe('create 100 Persons instance', function() {
        let persons = [];
        before(function(done) {
            persons = generator(100).slice(0);
            done();
        });
        it('person has unique id', function() {
            should(validator.isUUID(persons[0].id)).be.true('person identifier should be uuid');
            persons.forEach(value => {
                console.log(value);
            })
        });
    });
});