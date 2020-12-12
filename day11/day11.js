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
            
            occCount = 0;
            if(seats[i-1]){
                occCount += (seats[i-1][j-1] == occupied) ? 1 : 0;
                occCount += (seats[i-1][j] == occupied) ? 1 : 0;
                occCount += (seats[i-1][j+1] == occupied) ? 1 : 0;
            }
            if(seats[i+1]){
                occCount += (seats[i+1][j-1] == occupied) ? 1 : 0;
                occCount += (seats[i+1][j] == occupied) ? 1 : 0;
                occCount += (seats[i+1][j+1] == occupied) ? 1 : 0;
            }
            occCount += (seats[i][j-1] == occupied) ? 1 : 0;
            occCount += (seats[i][j+1] == occupied) ? 1 : 0;

            if(seats[i][j] == empty && occCount == 0){
                newRow.push(occupied);
                stabilized = false;
            }
            else if(seats[i][j] == occupied && occCount >= 4){
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
