
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

function count(par) {
    for (var i = 0; i < par.length; i++) {
            var key = par[i]
            key = key.toLowerCase()
            if (key == " ") {
                continue
            }
            else if (counts[key] == undefined) {
                counts[key]=1
            }
            else {
                counts[key]++
            }
    }
	return counts
}


console.log(count(par))

