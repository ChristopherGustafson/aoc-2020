
with open("input.txt") as input:
    file = input.read().split("\n\n")

    # Parse fields    
    fields = {}
    valid_value = [False for i in range(1000)]

    for line in file[0].split("\n"):
      splt = line.split(": ")
      ranges = splt[1].split(" or ")
      fields[splt[0]] = ranges
      range1 = [ int(x) for x in ranges[0].split("-") ]
      range2 = [ int(x) for x in ranges[1].split("-") ]
      
      for i in range(range1[0], range1[1]+1):
        valid_value[i] = True
      for i in range(range2[0], range2[1]+1):
        valid_value[i] = True
    
    # Parse my ticket
    my_ticket = file[1].split("your ticket:\n")

    # Count invalid values and error rate
    nearby_tickets = file[2].split("\n")[1:-1]
    error_rate = 0
    for ticket in nearby_tickets:
      for value in ticket.split(","):
        if(not valid_value[int(value)]):
          error_rate += int(value)

    print("Ticket scanning error rate: " + str(error_rate))

