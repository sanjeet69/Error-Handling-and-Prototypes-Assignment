class person {
    constructor( name = "sam", age = 30, gender = "unknown" ) {
        this.name = name;
        this.age = age;
        this. gender = gender;

    }

    introduc() {
         return `hello, my name is ${this.name}, I am ${this.age} years old , and  I  am ${this.gender}.`;
    }
}

const person1 = new person();
const person2 = new person ("amir", 25);
const person3 = new person("apoorv", 32, "male");


console.log(person1.introduc());
console.log(person2.introduc());
console.log(person3.introduc());