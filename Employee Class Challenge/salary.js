class employee {
    constructor (name, postion, salary) {
        this.name = name;
        this.postion = postion;
        this.salary = salary;
    }

    geSalary() {
        return this.salary;
    
    }
}

const employee1 = new employee ('Sanjeet Kumar', 'Software Engineer', 25000);


 const  salary = employee1.geSalary();
 console.log(`Emloyes Salary: $${salary}`);