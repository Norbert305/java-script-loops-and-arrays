let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]

let state = {totalSlots: 0, availableSlots:0, occupiedSlots:0}

function getParkingLotState(array) {

for (let i = 0; i < array.length; i++) {
  for (let j= 0; j < array[i].length; j++) {
    let value = array[i][j]
    if (value === 1) {
      state.occupiedSlots++
    }
    else if (value === 2) {
      state.availableSlots++
    }
  }
}
  state.totalSlots = state.availableSlots + state.occupiedSlots
  return state
}


console.log(getParkingLotState(parking_state))