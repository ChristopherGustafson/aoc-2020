var fs = require("fs");
var input = fs.readFileSync('input.txt').toString().split("\n");

var line;
var lower;
var higher;
var char;
var current_count = 0;
var total_count_first = 0;
var total_count_second = 0;

for(var i = 0; i < input.length; i++) {
  line = input[i].split(" ");

  //End if at the end of the file
  if(line.length === 1){
    break;
  }
  lower = line[0].split("-")[0];
  higher = line[0].split("-")[1];
  char = line[1].charAt(0);

  //Loop trough password and count every occurence of the policy character
  for(var j = 0; j < line[2].length; j++){    
    if(line[2].charAt(j) == char) {
      current_count++;
    }
  }

  //Check if amount is in policy range
  if(current_count >= lower && current_count <= higher){
    total_count_first++;
  }

  //Check if only of the the two indexes are equal to the policy charahter
  if((line[2].charAt(lower-1) === char) ^ ((line[2].charAt(higher-1) === char))){
    total_count_second++;
  }

  //Reset local counter
  current_count = 0;
}

console.log("First: " + total_count_first);
console.log("Second: " + total_count_second);