let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName (nameArray,string) {
        var newArray = []
        for (var i = 0; i < nameArray.length; i++) {
                if (nameArray[i].toLowerCase().includes(string)) {
                    newArray.push(nameArray[i])
                }
        }
        return newArray
}



console.log(filterByName(names, 'am'));


