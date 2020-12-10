with open("input.txt") as input:
    file_lines = input.readlines()

    # Part 1
    lines = file_lines[:]
    invalidNumber = 0
    for i in range(25, len(lines)):
        valid = False
        for a in range(i-25, i):
            for b in range (a+1, i):
                if(int(lines[i]) == int(lines[a]) + int(lines[b])):
                    valid = True
                    a = i
                    b = i
        if(not valid):
            invalidNumber = int(lines[i])
            print("Invalid number: " + lines[i])
            break

    # Part 2
    lines = file_lines[:]
    for i in range(0, len(lines)):
        sum = int(lines[i])
        smallest = sum
        biggest = sum

        j = i
        while(sum < invalidNumber):
            j += 1
            sum += int(lines[j])
            if(int(lines[j]) > biggest):
                biggest = int(lines[j])
            elif(int(lines[j]) < smallest):
                smallest = int(lines[j])

        if(sum == invalidNumber):
            print("Encryption weakness: " + str(smallest + biggest))
            break

