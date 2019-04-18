class Person {
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    constructor(id,firstname,lastname,age,email) {
        this._id = id;
        this._firstName = firstname;
        this._lastName = lastname;
        this._age = age;
        this._email = email;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    
    get fullName() {
        return `${this._firstName} ${this._lastName}`; 
    }
}
module.exports = Person;