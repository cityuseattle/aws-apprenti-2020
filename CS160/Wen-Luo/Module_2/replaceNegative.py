############
# this code replaces negative numbers in a list with positive ones 

original = [8,10,-10,0,55,-777]
for i in range (len(original)):
    if original[i]<0:
        original[i] = abs(original[i])
print(original)
