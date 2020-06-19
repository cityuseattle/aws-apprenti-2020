#this is part 1 
listfordinner = ["james","jake","jaramy","jimmy","jimmyothy"]
print(listfordinner)
listfordinner[0]="jarred"
print(listfordinner)
listfordinner.insert( int(len(listfordinner) /2),"rauel")
print(listfordinner)
listfordinner.append("blyle")
print(listfordinner)
while len(listfordinner) > 2:
    person = listfordinner.pop()
    print("sorry " + person + " but you cant come to dinner")
print(listfordinner)


#this is part 2
animallist = ["zebra", "antelope", "gizelle", "lion", "stonecoldsteveaustin", "cat", "dog", "hamster", "kite"]
for i in animallist:
    print(i)
print("the first three items are :" + str(animallist[0:3]))
print("the first three items are :" + str(animallist[3:6]))
print("the first three items are :" + str(animallist[6:9]))


#pe exercise 3
listofall = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]
listofduplicates=[]
   
count =0
count2 =1
while count < len(listofall) -1:
    if listofall[count] == listofall[count2]:
        if listofall[count] not in listofduplicates:
            listofduplicates.append(listofall[count])
    if count2 < len(listofall)-1:
        count2+=1
    else:
        count+=1
        count2 = count +1

print(listofduplicates)
    