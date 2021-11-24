let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(list_of_numbers) {
    let even = []
    let odd = []
    for (var i = 0; i < list_of_numbers.length; i++) {
        if (list_of_numbers[i] % 2 !== 0) {
            odd.push(list_of_numbers[i])
        }
        else {
            even.push(list_of_numbers[i])
        }
        combine = odd.concat(even)
    }
    return combine
}

console.log(mergeTwoList(list_of_numbers))
