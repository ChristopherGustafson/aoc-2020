
with open("input.txt") as input:
    file = input.read().split("\n\n")

    # Parse fields    
    fields = {}
    all_valid_values = [False for i in range(1000)]

    for line in file[0].split("\n"):
      splt = line.split(": ")
      ranges = splt[1].split(" or ")
      range1 = [ int(x) for x in ranges[0].split("-") ]
      range2 = [ int(x) for x in ranges[1].split("-") ]
      
      valid_value = [False for i in range(1000)]  
      for i in range(range1[0], range1[1]+1):
        valid_value[i] = True
        all_valid_values[i] = True
      for i in range(range2[0], range2[1]+1):
        valid_value[i] = True
        all_valid_values[i] = True
      fields[splt[0]] = valid_value

    
    # Count error rate and remove invalid tickets
    nearby_tickets = file[2].split("\n")[1:-1]
    valid_tickets = []
    error_rate = 0
    for ticket in nearby_tickets:
      valid = True
      for value in ticket.split(","):
        if(not all_valid_values[int(value)]):
          error_rate += int(value)
          valid = False
      if(valid):
        valid_tickets.append([int(x) for x in ticket.split(",")])

    # Parse my ticket
    my_ticket = file[1].split("\n")[1:][0].split(",")
    valid_tickets.append([int(x) for x in my_ticket])
    
    # Part 1 answer
    print("Ticket scanning error rate: " + str(error_rate))

    # Create lists of the rows for all tickets
    ticket_rows = [[] for i in range(len(fields))]

    for ticket in valid_tickets:
      for i, row in enumerate(ticket):
        ticket_rows[i].append(int(row))

    correct_fields = ["" for i in range(len(fields))]
    
    for i, row in enumerate(ticket_rows):
      print(i)
      for field, range in fields.items():
        correct = True
        for f in row:
          if(not range[f]):
            correct = False
            break
          
        if(correct):
          correct_fields[i] = field
          # del fields[field]
          break
        print(field + " not the one")

    print(correct_fields)