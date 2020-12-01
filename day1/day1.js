var fs = require("fs");
var textByLine = fs.readFileSync('input.txt').toString().split("\n");

for(var i = 0; i < textByLine.length; i++){
  for(var j = i+1; j < textByLine.length; j++) {
    if((parseInt(textByLine[i]) + parseInt(textByLine[j])) === 2020) {
      console.log((parseInt(textByLine[i])*parseInt(textByLine[j])));
    }
  }
}

for(var i = 0; i < textByLine.length; i++){
  for(var j = i+1; j < textByLine.length; j++) {
    for(var k = j+1; k < textByLine.length; k++){
      if((parseInt(textByLine[i]) + parseInt(textByLine[j]) + parseInt(textByLine[k])) === 2020) {
        console.log((parseInt(textByLine[i])*parseInt(textByLine[j])*parseInt(textByLine[k])));
      }
    }
  }
}