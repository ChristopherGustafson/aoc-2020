const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

const treeCounts = 
  [
    treesEncountered(input, 1, 1), 
    treesEncountered(input, 3, 1), 
    treesEncountered(input, 5, 1),
    treesEncountered(input, 7, 1),
    treesEncountered(input, 1, 2)
  ]; 

console.log("Trees encountered for right 1 down 1: " + treeCounts[0]);
console.log("Trees encountered for right 3 down 1: " + treeCounts[1]);
console.log("Trees encountered for right 5 down 1: " + treeCounts[2]);
console.log("Trees encountered for right 7 down 1: " + treeCounts[3]);
console.log("Trees encountered for right 1 down 2: " + treeCounts[4]);
console.log("Product of these: " + treeCounts.reduce((a,b) => a * b))


function treesEncountered(lines, right, down) {

  const tree = '#';
  var tree_count = 0;
  var current_index = right;

  // Loop trough the input lines, according to amount of steps down
  for(var i = down; i < lines.length; i += down) {

    // Exit if at the last line
    if(lines[i].length === 1){
      return;
    }

    // Check if the current char is a tree
    if(lines[i].charAt(current_index) == tree){
      tree_count++;
    }

    // Move appropriate steps to the right, if at the end, wrap around to the beginning of the pattern
    current_index = (current_index+right) % lines[i].length;
  };
  
  return tree_count;
}