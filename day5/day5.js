const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

var highest = 0;
var seats = [];

input.forEach(line => {

  var row = 0;
  for(var i = 0; i < 7; i++){
    row += Math.pow(2, (6-i)) * ((line[i] == 'B') ? 1 : 0);
  }

  var col = 0;
  for(var i = 7; i < line.length; i++){
    col += Math.pow(2, (9-i)) * ((line[i] == 'R') ? 1 : 0);
  }

  const seatID = row*8 + col;
  seats[seatID] = true;
  if(seatID > highest){
    highest = seatID;
  }
});

for(var i = 1; i < seats.length-1; i++){
  if(!seats[i] && seats[i-1] && seats[i+1]){
    console.log("My seat ID " + i);
  }
}

console.log("Highest seat ID is " + highest);
