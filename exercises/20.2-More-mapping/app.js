

var myNumbers = [23,234,345,4356234,243,43,56,2];

let newArray = myNumbers.map(myFunction)

function myFunction (value) {
    return value * 3;
}

console.log(newArray);