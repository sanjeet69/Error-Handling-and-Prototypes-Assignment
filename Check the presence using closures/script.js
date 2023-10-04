function numberChecker(numbersArray) {
    return function (numberToCheck){
        return numbersArray.includes(numberToCheck);
    };
}

const numbers = [1,2, 3,4,5, 6];
 const checkNumber = numberChecker(numbers);

 console.log(checkNumber(3));
 console.log(checkNumber(6));
 console.log(checkNumber(7));