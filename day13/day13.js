const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

const earliestTimestamp = parseInt(input[0]);
const buses = input[1].split(",");

var earliestBus = 0;
var shortestWait = Number.POSITIVE_INFINITY;

buses.forEach(bus => {
  console.log(bus)
  if(bus != "x"){
    const b = parseInt(bus);
    if((b - earliestTimestamp % b) < shortestWait){
      shortestWait = b- earliestTimestamp % b;
      earliestBus = b;
    }
  }
});

console.log(earliestBus);
console.log(shortestWait);

console.log(earliestBus * shortestWait);