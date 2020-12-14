
# Apply bitmask by swapping every bit in the value by 0/1 if in the mask, if mask is X
# keep the value bit
def unmask(mask: str, value: int):
  binary = list(bin(value)[2:].zfill(36))
  for i, c in enumerate(mask):
    if(c != 'X'):
      binary[i] = c
  return int("".join(binary), 2)

current_mask = ""
memory = {}

# Go trough the instructions update bit mask on mask instruction and apply mask to value 
# and save in memory location
with open("input.txt") as input:
    file_lines = input.readlines()
    for line in file_lines:
      instr = line.split(" = ")
      
      if(instr[0] == "mask"):
        current_mask = instr[1][:-1]
      else:
        mem_loc = instr[0][instr[0].find("[")+1:instr[0].find("]")]
        new_val = unmask(current_mask, int(instr[1]))
        memory[mem_loc] = new_val

sum:int = 0
for k in memory:
  sum += memory[k]

print(sum)