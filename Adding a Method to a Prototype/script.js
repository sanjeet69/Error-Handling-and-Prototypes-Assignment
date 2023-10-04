function person (firstName, lastName) {
    this.firstName = firstName;
     this.lastName = lastName;
}

person.prototype.getFullname = function () {
    return this.firstName + ' ' + this.lastName;
};

const person1 = new person('Sanjeet', "Kumar");
const person2 = new person('Ankit', "Kumar");

console.log(person1.getFullname());
console.log(person2.getFullname());