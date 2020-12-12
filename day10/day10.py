def tribonacci(n):
    if(n == 1):
        return 1
    if(n == 2):
        return 2
    if(n == 3):
        return 4
    return tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1)


with open("input.txt") as input:
    file_lines = input.readlines()

    # Part 1
    lines = file_lines[:]
    adapters = [int(numeric_string) for numeric_string in file_lines]
    # Sort the adapters to look at the adapters lowest to highest
    adapters.sort()
    print(adapters)
    
    # Count your own built-in adapter that is always three above your highest adapter
    three_count = 1
    one_count = 0

    one_sequence_count = 0
    one_sequences = [] 
    

    # Compare the first adapter to the charging outlet
    if(adapters[0] == 3):
        three_count += 1
    elif(adapters[0] == 1):
        one_count += 1
        one_sequence_count += 1
        
    # Compare the rest of the adapters to its next adapter
    for i in range(0, len(adapters)-1):
        if(adapters[i+1]-adapters[i] == 3):
            three_count += 1
            if(one_sequence_count > 0):
                one_sequences.append(one_sequence_count)
            one_sequence_count = 0
        elif(adapters[i+1]-adapters[i] == 1):
            one_count += 1
            one_sequence_count += 1
        
    print(three_count * one_count)

    print(one_sequences)
    # Part 2
    total = 1
    for seq in one_sequences:
        print(seq)
        total *= tribonacci(seq)

    print(total)
    print("Total orderings: " + str(total))


