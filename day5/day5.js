const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

var highest = 0;

input.forEach(line => {

  var row = 0;
  for(var i = 0; i < 7; i++){
    row += Math.pow(2, (6-i)) * ((line[i] == 'B') ? 1 : 0);
  }

  var col = 0;
  for(var i = 7; i < line.length; i++){
    console.log(((line[i] == 'R') ? 1 : 0));
    col += Math.pow(2, (9-i)) * ((line[i] == 'R') ? 1 : 0);
  }

  const seatID = row*8 + col;
  if(seatID > highest){
    highest = seatID;
  }
  
});

console.log("Highest seat ID is " + highest);
