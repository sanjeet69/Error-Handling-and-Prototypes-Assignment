function getperson(personObject) {

    try {
        if (!personObject || typeof personObject !== 'object' || !('name' in personObject) || !('age' in personObject)) {
            throw new Error('Invalid parameter type');
        }

        const name = personObject.name;
        const age = personObject.age;
       
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

try {
    const person1 = { name: 'Sanjeet Kumar', age: 30};
    const person2 = { name: 'aditya'};
    const person3 =  'not an object';

    console.log(getperson(person1));
    console.log(getperson(person2));
    console.log(getperson(person3));
}catch (error) {
    console.error(`an unexpected error occured:`, error);
}