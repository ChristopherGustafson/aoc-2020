const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

const my_bag = 'shiny gold';
const bag_types = new Map();
bag_count = 0;

// Save all bags and which bags they can contain in a map
input.forEach(line => {
  if(line == ""){
    return;
  }
  const {bag, contains} = parseLine(line);
  bag_types.set(bag, contains);
});

//Go trough the bags and count how many that can hold my_bag
for(const [key, value] of bag_types.entries()){
  if(value && key != my_bag){
    if(checkBag(my_bag, key, value)){
      bag_count++;
    }
  }
}

console.log("Amount of bags that can contain " + my_bag + ": " + bag_count);

function checkBag(wanted, bag, bagContains){
  if(wanted == bag){
    return true;
  }
  // Recursively go through bags to see if it eventually can contain the wanted bag
  var containsWanted = false;
  if(bagContains){
    bagContains.forEach(b => {
      if(checkBag(wanted, b, bag_types.get(b))){
        containsWanted = true;
      };
    });
  }
  return containsWanted;
}

// Parse a line and return {bag, [bags it can contain]}
function parseLine(line){
  const lines_split = line.split(" bags contain ");
  const bag = lines_split[0];
    
  if(lines_split[1].includes("no other bags.")){
    return {bag: bag, contains: []};
  }

  const contains = lines_split[1].replace(/bag,/g, "bags,").split(" bags, ").map(bag => bag.substring(2, bag.length));
  contains[contains.length-1] = contains[contains.length-1].replace("bag.", "bags.").split(" bags.")[0];

  return {bag: bag, contains: contains};
}

