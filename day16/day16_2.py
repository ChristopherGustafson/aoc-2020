
with open("input.txt") as input:
    file = input.read().split("\n\n")

    # Parse fields    
    fields = {}
    
    for line in file[0].split("\n"):
      splt = line.split(": ")
      ranges = splt[1].split(" or ")
      range1 = [ int(x) for x in ranges[0].split("-") ]
      range2 = [ int(x) for x in ranges[1].split("-") ]

      valid_value = [False for i in range(1000)]  
      for i in range(range1[0], range1[1]+1):
        valid_value[i] = True
      for i in range(range2[0], range2[1]+1):
        valid_value[i] = True
      
      fields[splt[0]] = valid_value
      

    #Parse my ticket
    my_ticket = file[1].split("your ticket:\n")

    # Parse nearby tickets
    ticket_rows = [[] for i in range(len(fields))]
    for ticket in file[2].split("\n")[1:-1]:
      for i, row in enumerate(ticket.split(",")):
        ticket_rows[i].append(int(row))

    correct_fields = ["" for i in range(len(fields))]
    
    for i, row in enumerate(ticket_rows):
      for field, range in fields.items():
        print(field)
        correct = True
        for f in row:
          if(not range[f]):
            correct = False
            break
          
        if(correct):
          print("FAk u mom")
          correct_fields[i] = field
          del fields[field]
          break

    print(correct_fields)
        