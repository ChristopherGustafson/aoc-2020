const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

var direction = 0;
var x = 0;
var y = 0;

input.forEach(line => {
  switch(line[0]){
    case 'N':
      y += parseInt(line.substring(1, line.length));
      break;
    case 'S':
      y -= parseInt(line.substring(1, line.length));
      break;
    case 'E':
      x += parseInt(line.substring(1, line.length));
      break;
    case 'W':
      x -= parseInt(line.substring(1, line.length));
      break;
    case 'L':
      direction += parseInt(line.substring(1, line.length));
      break;
    case 'R':
      direction -= parseInt(line.substring(1, line.length));
      break;
    case 'F':
      switch(mod(direction, 360)){
        case 0:
          x += parseInt(line.substring(1, line.length));
          break;
        case 90:
          y += parseInt(line.substring(1, line.length));
          break;
        case 180:
          x -= parseInt(line.substring(1, line.length));
          break;
        case 270:
          y -= parseInt(line.substring(1, line.length));
          break;
      }  
      break;
  }
})
console.log(Math.abs(x) + Math.abs(y));

function mod(n, m) {
  return ((n % m) + m) % m;
}