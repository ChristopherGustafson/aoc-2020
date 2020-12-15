input = [1, 2, 16, 19, 18, 0]

numbers = {}
turn = 1
last_num  = input[0]

# Read initial numbers
for num in input:
  numbers[num] = (turn, 0)
  last_num = num
  turn += 1

# Part 1/Part 2 only differs in amount turns that should be counted range(turn, part1) for par 
part1 = 2021
part2 = 30000001
for i in range(turn, part2):
  last = numbers[last_num]
  # Number has only occured once
  if (last[1] == 0):
    # Next number is 0
    numbers[0] = (i, numbers[0][0])
    last_num = 0
  
  # Number has occurred more than once
  else:
    # Next number is how many turns away the last number was said
    new_num = last[0] - last[1]
    
    # If the next number has been said before, update its entry in the map
    if new_num in numbers:
      prev_turn = numbers[new_num][0]
      numbers[new_num] = (i, prev_turn)
    # If not, add it to the map indicating that it only has been said once
    else:
      numbers[new_num] = (i, 0)
    last_num = new_num

print(last_num)