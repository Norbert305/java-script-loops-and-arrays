let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(function(names) {
            if (names[0] == "R") {
            return names
            }
});
console.log(resultingNames);