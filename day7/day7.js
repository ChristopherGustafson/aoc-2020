const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

const my_bag = "shiny gold";
var bag_types = new Map();
var wanted_bags = [];


input.forEach(line => {
  if(line == ""){
    return;
  }

  const {bag, otherBags, contains} = praseLine(line);
  if(otherBags){
    bag_types[bag] = contains;
    contains.forEach(bag_color => {
      if(bag_color == my_bag){

      }
    })

  }
});


function parseLine(line){
  const lines_split = line.split(" bags contain ");  
  const bag = lines_split[0];
    
  if(lines_split[1] == " no other bags "){
    return {bag: bag, otherBags: false, contains: []};
  }

  const contains = lines_split[1].replace("bag,", "bags,").split(" bags, ").map(bag => bag.substring(2, bag.length));
  contains[contains.length-1] = contains[contains.length-1].replace("bag.", "bags.").split(" bags.")[0];

  return {bag: bag, otherBags: true, contains: contains};
}