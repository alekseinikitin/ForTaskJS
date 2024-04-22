week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

let calendar = [[],[],[],[],[],[],[]]
calendar[0] = week
let year = 2024
let month = 3
let monthFirstDayOfWeek = (new Date(year, month, 1).getDay() + 6) % 7

for (let i = 0; i <= 41; i++) {
  let shiftedIndex = i - monthFirstDayOfWeek
  let rowIndex = Math.floor((i - 1) / 7)
  let colIndex = (i - 1) % 7
  calendar[rowIndex + 1][colIndex] = new Date(year, month, shiftedIndex)
} 
console.log(calendar)
