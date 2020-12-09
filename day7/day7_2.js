const fs = require("fs");
const input = fs.readFileSync('input.txt').toString().split("\n");

const myBag = 'shiny gold';
const bagTypes = new Map();

// Save all bags and which bags they can contain in a map
input.forEach(line => {
  if(line == ""){
    return;
  }
  const {bag, contains} = parseLine(line);
  bagTypes.set(bag, contains);
});

// Recursively go trough the bag types that our bag contains and calculate
// the number of bags it contains. For each bag we calculate it by adding for 
// each of our containing bags its amount + (its amount * the amount of bag it contains)
console.log(getBagCount(bagTypes.get(myBag)));
function getBagCount(bagContains){
  if(bagContains === undefined || bagContains.length == 0){
    return 0;
  }
  var bagCount = 0;
  bagContains.forEach(bag => {
    const {color, amount} = bag;
    bagCount += amount + amount * getBagCount(bagTypes.get(color));
  });
  return bagCount;
}

// Parse a line and return {bag, [bags it can contain and their amounts]}
function parseLine(line){
  const lines_split = line.split(" bags contain ");
  const bag = lines_split[0];
    
  if(lines_split[1].includes("no other bags.")){
    return {bag: bag, contains: []};
  }

  const contains = lines_split[1].replace(/bag,/g, "bags,").split(" bags, ").map(bag => ({color: bag.substring(2, bag.length), amount: parseInt(bag[0])}));
  contains[contains.length-1].color = contains[contains.length-1].color.replace("bag.", "bags.").split(" bags.")[0];

  return {bag: bag, contains: contains};
}