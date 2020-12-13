const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

var ship = [0, 0];
var wp = [10, 1];

input.forEach(line => {
  switch(line[0]){
    case 'N':
      wp[1] += parseInt(line.substring(1, line.length));
      break;
    case 'S':
      wp[1] -= parseInt(line.substring(1, line.length));
      break;
    case 'E':
      wp[0] += parseInt(line.substring(1, line.length));
      break;
    case 'W':
      wp[0] -= parseInt(line.substring(1, line.length));
      break;  
    case 'F':
      const dist = parseInt(line.substring(1, line.length));
      ship = [ship[0]+dist*wp[0], ship[1]+dist*wp[1]];
      break;
    default:
      const rad = (line[0] == 'L') ? parseInt(line.substring(1, line.length)) * Math.PI / 180 : -parseInt(line.substring(1, line.length)) * Math.PI / 180;
      wp = [wp[0]*Math.cos(rad) - wp[1]*Math.sin(rad), wp[0]*Math.sin(rad) + wp[1]*Math.cos(rad)];
      break;
  }
})

console.log(Math.round(Math.abs(ship[0]) + Math.abs(ship[1])));
