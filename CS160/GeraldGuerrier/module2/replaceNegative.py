original= [8,20,-10,0,55,-77]
for i in range(len(original)):
    if original[i]<0:
        original[i]= abs(original[i])
print (original)

