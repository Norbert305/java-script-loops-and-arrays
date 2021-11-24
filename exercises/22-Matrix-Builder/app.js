

function matrixBuilder(five) {
    let newArray = []
    let child = []
    for(let i = 0; i < five; i++) {
        child.push(Math.round(Math.random()>0.5))
        newArray.push(child)
    }
    return newArray
}

// do not change anything from this line down
console.log(matrixBuilder(5))