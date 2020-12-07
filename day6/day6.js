const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n\n");

var count_sum_1 = 0;
var count_sum_2 = 0;

input.forEach(group => {
  
  // Part 1
  var correct_answer = [];
  [...group.replace('\n', '')].forEach(answer => {
    // Mark each yes answer with true    
    if(answer != ' '){
      correct_answer[charDiff(answer, 'a')] = true;
    }
  });
  // Count amount of true answers
  correct_answer.forEach(answer => {
    if(answer){
      count_sum_1++;
    }
  });

  // Part 2
  var answers = group.split("\n");
  correct_answer = new Array(charDiff('z', 'a')+1).fill(0);
  //Go trough all group of answers, for each group increment each answer counter with one per answer
  answers.forEach(answer => {
    [...answer].forEach(a => {
      if(a != ' '){
        correct_answer[charDiff(a, 'a')] += 1;
      }
    });
  });
  // If answer counter is equal to group length, everyone in the group have answered yes, increment total counter
  correct_answer.forEach(answer => {
    if(answer == answers.length){
      count_sum_2++;
    }
  });
});

console.log("Part 1 answer: " + count_sum_1);
console.log("Part 2 answer: " + count_sum_2);

// Helper function to calculate numeric ascii difference between two charachters (for char to index conversion)
function charDiff(a,b) {
    return a.charCodeAt(0) - b.charCodeAt(0);
}