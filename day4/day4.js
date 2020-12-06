const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n\n");

var total_count = 0;
let map = new Map();
var required_fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

input.forEach(line => {
  var fields = line.replace(/\n/g," ").split(" ");
  fields.forEach(f => {
    var t = f.split(":")[0];
    map.set(t, true);
  });
  var all_fields = true;
  required_fields.forEach(f => {
    if(!map.get(f)){
      all_fields = false;
      return;
    }
  });
  if(all_fields){
    total_count++;
  }
  map = new Map();
});

console.log("Valid passports: " + total_count);

