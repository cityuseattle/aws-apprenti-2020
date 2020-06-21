########## 
list1 = ['Physics', 'chemistry', 1997, 2000]
list2 = [1,2,3,4,5,6]

# Accessing 
print ("List1[0]:", list1[0])
print ("List2[1:5]:", list2[1:5])

# Updating 
print ("Values avaliable at index 2 :")
print (list1[2])
list1[2] = 2001 
print ("New value avaliable at index 2: ")
print (list1[2])

#### Appending an element to a list 
list1.append(2020)
print ("New list1 :", list1)

### Inserting an element 
list1.insert(0,'Python')    #Insert Python to the 0th index 
print ("After Inseting:", list1)

#### removing an element using pop() and remove()
# using del mothod 
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[1]                       # deleting second term 
print (motorcycles)


##### pop () method ## 
motorcycles = ['honda', 'yamaha', 'suzuki']
popped_motorcycle = motorcycles.pop()           # pop deletes the last term 
print( popped_motorcycle)
first_owned = motorcycles.pop(0)
print ("The first motorcycle I owned was:", first_owned)

###### using remove () method
motorcycles = ['honda','yamaha','suzuki','ducati'] 
motorcycles.remove('ducati')
print (motorcycles)

