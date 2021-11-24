let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

var newArray = theBools.map(function(value) {
        if (value == 1) {
            return "wiki"
        }
        else {
            return "woko"
        }
});

console.log(newArray)