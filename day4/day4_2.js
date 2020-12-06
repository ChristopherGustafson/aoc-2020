const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n\n");

var total_count = 0;

var required_fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
var possible_ecl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']

input.forEach(line => {
  const map = new Map();  
  var fields = line.replace(/\n/g," ").split(" ");
  fields.forEach(f => {
    var t = f.split(":");
    map.set(t[0], t[1]);
  });
  var all_correct_fields = true;
  
  //Chech if all fields are present
  required_fields.forEach(f => {
    if(!map.get(f)){
      all_correct_fields = false;
      return;
    }
  });
  
  //Check that all fields follow the rules
  for(const [key, value] of map.entries()) {
    switch(key){
      case 'byr':
        if(!inRange(value, 1920, 2002)){
          all_correct_fields = false;
          return;
        }
        break;
      case 'iyr':
        if(!inRange(value, 2010, 2020)){
          all_correct_fields = false;
          return;
        }
        break;
      case 'eyr':
        if(!inRange(value, 2020, 2030)){
          all_correct_fields = false;
          return;
        }
        break; 
      case 'hgt':
        if(value.includes('cm')){
          if(!inRange(value.split('cm')[0], 150, 193)){
            all_correct_fields = false;
            return;
          }
        }
        else if(value.includes('in')){
          if(!inRange(value.split('in')[0], 59, 76)){
            all_correct_fields = false;
            return;
          }
        }
        else {
            all_correct_fields = false;
            return;
        }
        break;
      case 'hcl':
        if(value.length == 7 && value[0] == '#'){
          [...value.substring(1)].forEach(c => {
            if(!((c >= 'a' && c <= 'f') || (c >='0' && c <= '9'))){
              all_correct_fields = false;
              return;
            }
          })
        }
        else {
          all_correct_fields = false;
          return;
        }
        break;
      case 'ecl':
        if(!possible_ecl.includes(value)){
          all_correct_fields = false;
          return;
        }
        break;
      case 'pid':
        if(value.length === 9){
          [...value].forEach(c => {
            if(!(c >= '0' && c <= '9')){
              all_correct_fields = false;
              return;
            }
          });
        }
        else {
          all_correct_fields = false;
          return;
        }
        break;
    }
 }

  if(all_correct_fields){
    total_count++;
  }
});

console.log("Valid passports: " + total_count);

//Check if x is in range [min, max]
function inRange(x, min, max){
  return (x >= min && x <= max);
}
