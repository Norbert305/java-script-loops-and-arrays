function lyricsGenerator(cool) {
    let lyrics = " "
    for (var i = 0; i < cool.length; i++) {
    if (cool[i] === 0) {
        lyrics+= "Boom ";
    }
    else if (cool[i] === 1) {
        lyrics+= "Drop the base ";
    }
    if (cool[i] === 1 && cool[i-1] === 1 && cool[i-2]===1) {
            lyrics+= "!!!Break the base!!! ";
        }
    } 
    return lyrics;
}

// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))