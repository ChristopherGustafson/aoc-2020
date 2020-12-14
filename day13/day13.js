const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");
const earliestTimestamp = parseInt(input[0]);

const buses = input[1].split(",");

console.log(part1(buses));
console.log(part2(buses));

// Looping trough the buses and calculating how many minutes after the earliest timestamp it
// arrives with the following formula: wait = (busId-earliestTimestamp) & busId. We then select
// the bus with the lowest wait.

function part1(buses){
  var earliestBus = 0;
  var shortestWait = Number.POSITIVE_INFINITY;

  buses.forEach(bus => {
    if(bus != "x"){
      const b = parseInt(bus);
      if((b - earliestTimestamp % b) < shortestWait){
        shortestWait = b - earliestTimestamp % b;
        earliestBus = b;
      }
    }
  });
  return (earliestBus * shortestWait);
}

// By realising that all the input buses are prime numbers and that for two buses a and b,
// a timestamp where they both occur with the correct offsets reocurr with a factor of a*b.
// Thus we start by iterating trough factors of the first bus until we find a timestamp which
// satisfies the problem for the next bus and its offset. We then iterate trough timestamps
// with a factor of bus1*bus2, after the third bus it will be bus1*bus2*bus3 and so on...

function part2(buses) {
  var reocurranceFactor = parseInt(buses[0]);
  var timestamp = reocurranceFactor;
  
  buses.forEach(bus => {
    if(buses.indexOf(bus) == 0){
      return;
    }
    if(bus != "x"){
      while(true){
        const b = parseInt(bus);
        if((timestamp + buses.indexOf(bus)) % b == 0){
          reocurranceFactor *= b;
          break;
        }
        timestamp += reocurranceFactor;
      }
    }
  });

  return timestamp;
}