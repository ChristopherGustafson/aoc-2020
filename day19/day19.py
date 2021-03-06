

def create_logical_expression(rules: list, index: int):
    current_rule = str(rules[index]).split(" ")
    rule_string = ""
    for i, c in enumerate(current_rule):
        if i < len(current_rule)-1:
            if current_rule[i+1] != "|":
                rule_string += str(create_logical_expression(rules, int(c)))
                rule_string += " and "






def parse_rules(lines: list):
    rules = [""] * 150
    for l in enumerate(lines):
        line = str(l).split(": ")
        rules[int(line[0])] = line[1]
    return rules






with open("input.txt") as input:  
    lines = input.read().split("\n")
    x = 3
    exec("print(x == 3)")
