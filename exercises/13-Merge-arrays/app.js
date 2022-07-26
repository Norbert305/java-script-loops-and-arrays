var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here

    let finalArray = firstArray.concat(secondArray)

    for (let i = 0; i < finalArray.length; i++) {
            newArray.push(finalArray[i])
    }


    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));