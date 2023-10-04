class car {
    constructor (cmp, model, year) {

    this.cmp = cmp;
    this.model = model;
    this.year = year;
    }
    getdescription() {
         return `this is a ${this.year} ${this.cmp} ${this.model}`;
    }
}

const myCar = new  car ('Thar', 'greny', 2022);

const cardescription = myCar.getdescription();
console.log(cardescription);