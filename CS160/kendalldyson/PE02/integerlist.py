list1 = [5, 5, 15, 5, 5, 15, 40, 50, -22, 88, 88, -22, -22]
size = len(list1)  
repeated = []  
for i in range(size):  
    k = i + 1 
    for j in range(k, size):  
        if list1[i] == list1[j] and list1[i] not in repeated:  
            repeated.append(list1[i])  
print(repeated) 
 