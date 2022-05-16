

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(arr){
 
  let slots=0;
  let available=0;
  let ocuped=0;
  for(let i=0;i<arr.length;i++){
    for(let t=0;t<arr[i].length;t++){
      if(arr[i][t]===1){
        slots++;
        ocuped++;
      }else if(arr[i][t]===2){
        slots++;
        available++;
      }
    }
  }
  const state = {
    totalSlots: slots,
    availableSlots: available,
    occupiedSlots: ocuped
  } 
  return state;
}


console.log(getParkingLotState(parking_state))