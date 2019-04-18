const Person = require('../src/person');
const uuid = require('uuid');
const validator = require('validator');
const should = require('should');
describe('person class spec', function() {
   describe('create new Person instance', function() {
       let person;
       before(function(done) {
          person = new Person(uuid.v4(),'testFirstName','testLastName',20,'test@test.com');
          done();
       });
       it('person has unique id', function() {
           should(validator.isUUID(person.id)).be.true('person id should be uuid');
       });
   });
});