
# Unmask by replacing every bit with 1/X in bit mask with these characters, and letting 0s
# in bitmask remain

def unmask(mask: str, value: int):
  binary = list(bin(value)[2:].zfill(36))
  for i, c in enumerate(mask):
    if(c != '0'):
      binary[i] = c
  return "".join(binary)

current_mask = ""
memory = {}

with open("input.txt") as input:
    file_lines = input.readlines()
    for line in file_lines:
      instr = line.split(" = ")
      
      if(instr[0] == "mask"):
        current_mask = instr[1][:-1]
      else:
        mem_loc = instr[0][instr[0].find("[")+1:instr[0].find("]")]
        unmasked = unmask(current_mask, int(mem_loc))
        new_value = int(instr[1])

        # Count the number of X (floating bits) in the unmasked memory location
        floating_count = 0
        for c in list(unmasked):
          if(c == 'X'):
            floating_count += 1

        # This leaves 2^floating_count memory addresses we should write to. Loop trough
        # these options and replace the X's in the memory location with the corresponding
        # bit of the current option, and write the given value to all memory adrress options
        for i in range(0, (2**floating_count)):
          memory_loc = unmasked
          t = list(bin(i)[2:].zfill(floating_count))
          for bit in t:
            memory_loc = memory_loc.replace("X", bit, 1)
          memory[memory_loc] = new_value
    
sum:int = 0
for k in memory:
  sum += memory[k]

print(sum)