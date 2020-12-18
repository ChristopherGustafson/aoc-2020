import copy

def getActiveCount(active, x, y, z, w):
    count = 0
    for dx in range(-1, 2):
        for dy in range(-1, 2):
            for dz in range(-1, 2):
                for dw in range(-1, 2):
                    if(dx or dy or dz or dw):
                        if(active[w+dw][z+dz][y+dy][x+dx]):
                            count += 1
    return count

def getTotalActiveCount(active):
    count = 0
    for cube in active:
        for grid in cube:
            for row in grid:
                for pos in row:
                    if pos:
                        count += 1
    return count

# Representation of pocket dimension, point (w,x,y,z) represented by active[w][z][y][x]
active = [[[[0 for w in range(30)] for z in range(30)] for y in range(30)] for x in range(30)]

# Parse input
with open("input.txt") as input:
    mid = 13
    file = input.read().split("\n")
    for y, line in enumerate(file[:-1]):
        print(line)
        for x, c in enumerate(line):
            if c == "#":
                active[mid][mid][mid+y][mid+x] = 1
    

print(getTotalActiveCount(active))

# Calculate six cycles
for i in range(6):
    new_matrix = copy.deepcopy(active)

    for x in range(1, 29):
        for y in range(1, 29):
            for z in range(1, 29):
                for w in range(1, 29):
                    active_count = getActiveCount(active, x, y, z, w)
                    
                    if(active[w][z][y][x] and not(active_count == 2 or active_count == 3)):
                        new_matrix[w][z][y][x] = 0
                    elif(not active[w][z][y][x] and active_count == 3):
                        new_matrix[w][z][y][x] = 1

    active = new_matrix
    print(getTotalActiveCount(active))
    
