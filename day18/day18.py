# Evaluate expression according to the rules of part 1
def evaluate1(exp):
    result = 0
    next_op = ""
    next_val = 0
    i = 0
    while(i < len(exp)):
        # If we find an operator, save it as the next operator
        if exp[i] == "+" or exp[i] == "*":
            next_op = exp[i]
        else:
            # If we find the beginning of a paranthesis, collect the expression inside it and evaluate it
            if exp[i] == "(":
                p_count = 1
                first_p = i
                while(p_count > 0):
                    i += 1
                    if(exp[i] == "("):
                        p_count += 1
                    elif(exp[i] == ")"):
                        p_count -= 1
                next_val = evaluate1(exp[first_p+1:i])
            else:
                # Otherwise we have found a value in the expression
                next_val = int(exp[i])

            if result == 0:
                result = next_val
            else:
                # If we have found a value and an operator, calculate it into the total result
                if next_op == "+":
                    result += next_val
                else:
                    result *= next_val
        i += 1
    return result

def evaluate2(exp):
    i = 0
    # Start by evaluating parenthesis and replacing parenthesis with their value in the original expression
    while(i < len(exp)):
        if exp[i] == "(":
            p_count = 1
            first_p = i
            while(p_count > 0):
                i += 1
                if(exp[i] == "("):
                    p_count += 1
                elif(exp[i] == ")"):
                    p_count -= 1
            exp = exp[:first_p] + [str(evaluate2(exp[first_p+1:i]))] + exp[i+1:]
            i = first_p
        i += 1

    # At this point no paranthesis are left, evaluate all additions
    next_op = ""
    next_val = 0
    i = 0
    while(i < len(exp)):
        if exp[i] == "+":
            next_op = "+"
        elif exp[i] == "*":
            next_op = ""
            next_val = 0
        else:
            if next_val == 0:
                next_val = int(exp[i])
            elif next_op != "":
                t = int(next_val) + int(exp[i])
                exp = exp[:i-2] + [str(t)] + exp[i+1:]
                next_op = ""
                next_val = t
                i-=2
        i += 1

    # At this point only mutltiplications remain, we collect all values left and calculate product
    result = 1
    for i in exp:
        if i != "*":
            result *= int(i)
    return result


with open("input.txt") as input:  
    file = input.read().replace(" ", "").split("\n")
    sum = 0
    for line in file[:-1]:
        sum += evaluate1(line)
    print(sum)

    sum = 0
    for line in file[:-1]:
        sum += evaluate2(list(line))
    print(sum)
    