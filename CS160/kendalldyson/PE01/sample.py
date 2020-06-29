list1 = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]  
size = len(list1)  
repeated = []  
for i in range(size):  
    k = i + 1 
    for j in range(k, size):  
        if list1[i] == list1[j] and list1[i] not in repeated:  
            repeated.append(list1[i])  
print(repeated) 
 