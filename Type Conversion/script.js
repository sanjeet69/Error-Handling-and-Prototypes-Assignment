function convertToNumber(inputString){
    try {
        const number = Number(inputString);

        if(isNaN(number)) {
            throw new Error("Invalid number");
        }
        
        return number;
    } catch (error){
        return "Invalid Number";
    }
}

console.log(convertToNumber("233"));
console.log(convertToNumber("25.3"));
console.log(convertToNumber("sanjeet"));
console.log(convertToNumber("stm@23"));