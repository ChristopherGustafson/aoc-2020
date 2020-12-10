    
with open("input.txt") as input:
    file_lines = input.readlines()
    
    # PART 1
    # Execute the instructions in the text files and keep track of which have been executed, if one has already
    # been executed, break loop and print the accumulator
    lines = file_lines[:]
    executed = [False] * len(lines)
    current = 0
    acc = 0
    while(not executed[current]):
        executed[current] = True
        instruction = lines[current].split()
        if(instruction[0] == "acc"):
            exec("acc=acc{0}".format(instruction[1]))
        elif(instruction[0] == "jmp"):
            exec("current=current{0}-1".format(instruction[1]))
        current += 1  
    print("Part 1 answer: " + str(acc))

    # PART 2
    # Brute force the problem by swapping out one jmp/nop instruction at a time and seeing if the program terminates.
    # If it does, print the acc
    for i in range(len(file_lines[:])):
        lines = file_lines[:]
        if(lines[i].split()[0] == "jmp"):
            lines[i] = lines[i].replace("jmp", "nop")
        elif(lines[i].split()[0] == "nop"):
            lines[i] = lines[i].replace("nop", "jmp")
        else:
            continue

        executed = [False] * len(lines)
        current = 0
        acc = 0
        while(not executed[current]):
            executed[current] = True
            instruction = lines[current].split()
            if(instruction[0] == "acc"):
                exec("acc=acc{0}".format(instruction[1]))
            elif(instruction[0] == "jmp"):
                exec("current=current{0}-1".format(instruction[1]))
            current += 1
            if(current >= len(lines)):
                print("Part 2 answer: " + str(acc))
                i = range(len(file_lines[:]))
                break
                
            

            

            
        



