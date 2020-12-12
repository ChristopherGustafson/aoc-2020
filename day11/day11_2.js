const fs = require("fs");
var seats = fs.readFileSync('input.txt').toString().split("\n");;

var stabilized = false
const empty = 'L'
const occupied = '#'
const floor = '.'

while(!stabilized){
    stabilized = true;
    const newSeats = []
    for(var i = 0; i < seats.length; i++){
        const newRow = [] 
        for(var j = 0; j < seats[0].length; j++){
            if(seats[i][j] == floor){
                newRow.push(floor);
                continue;
            }
            occCount = findOccCount(seats, i, j);

            if(seats[i][j] == empty && occCount == 0){
                newRow.push(occupied);
                stabilized = false;
            }
            else if(seats[i][j] == occupied && occCount >= 5){
                newRow.push(empty);
                stabilized = false;
            }
            else{
                newRow.push(seats[i][j]);
            }
        }
        newSeats.push(newRow);
    }
    seats = newSeats;
}

occCount = 0;
seats.forEach(line => {
    [...line].forEach(seat => {
        if(seat == occupied){
            occCount++;
        }
    });
});
console.log(occCount);

function findOccCount(seats, i, j){
    var topLeft = true;
    var top = true;
    var topRight = true;
    var left = true;
    var right = true;
    var botLeft = true;
    var bot = true;
    var botRight = true;
    occCount = 0;

    for(var k = 1; k < seats[0].length; k++){
        if(seats[i-k]){
            if(topLeft && seats[i-k][j-k] != floor){ 
                occCount += (seats[i-k][j-k] == occupied) ? 1 : 0; 
                topLeft = false;
            }
            if(top && seats[i-k][j] != floor){ 
                occCount += (seats[i-k][j] == occupied) ? 1 : 0; 
                top = false;
            }
            if(topRight && seats[i-k][j+k] != floor){ 
                occCount += (seats[i-k][j+k] == occupied) ? 1 : 0; 
                topRight = false;
            }
        }
        if(seats[i+k]){
            if(botLeft && seats[i+k][j-k] != floor){ 
                occCount += (seats[i+k][j-k] == occupied) ? 1 : 0; 
                botLeft = false;
            }
            if(bot && seats[i+k][j] != floor){ 
                occCount += (seats[i+k][j] == occupied) ? 1 : 0; 
                bot = false;
            }
            if(botRight && seats[i+k][j+k] != floor){ 
                occCount += (seats[i+k][j+k] == occupied) ? 1 : 0; 
                botRight = false;
            }
        }
        if(left && seats[i][j-k] != floor){
            occCount += (seats[i][j-k] == occupied) ? 1 : 0; 
           left = false;
        }
        if(right && seats[i][j+k] != floor){
            occCount += (seats[i][j+k] == occupied) ? 1 : 0; 
            right = false;
        }
        if(!(topLeft || top || topRight || left || right || botLeft || bot || botRight)){
            return occCount
        }
    }
    return occCount;
}
