## Lesson on Lists

## To create a list type the following:

list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5]
list3 = ["a", "b", "c", "d"]

## note that the first item (from left) in the list is at position 0

## in order to access values from a list, call on the index of the desired list item with []:

print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])

## in order to output:

## python3 #name of file#

## To update the list, do the following:

print ("Value available at index 2 : ")
print (list2[2])
list1[2] = 2001
print ("New value available at index 2 : ")
print (list1[2])

# Appending a list:

list1.append(2020)
print("New List:", list1)

# Inserting on a list:

list1.insert(0, 'Python')
print("After instering: ", list1)

# Three ways to remove an element from a  list:

### Number 1: del

motorcycles = ['honda', 'yamaha', 'susuki']
del motorcycles[1]
print(motorcycles)

### Number 2: pop

motorcycles = ['honda', 'yamaha', 'suzuki']
popped_motorcycle = motorcycles.pop()
print(motorcycles)
print(popped_motorcycle)
first_owned = motorcycles.pop(0)
print("The first motorcycle I owned was a", first_owned)

### Number 3: .remove

motorcycles = ['honda', 'yamaha', 'susuki', 'ducati']
motorcycles.remove('ducati')
print(motorcycles)

# Using Loop in lists

original= [8,20,-10,0,55,-777]
for i in range(len(original)):
    if original[i]<0:
        original[i]= abs(original[i])
print(original)

# Tuples are immutable lists, essentially. The values can not be changed once established.
# To demostrate, we'll ty to assign a value of 4.0 to an item with a value of 2.0 at index 1

courses = ('CS101', 2.0, 3)
courses[1] = 4.0

# Note that you will get an error message. 
# HOWEVER, Tuple's can be sorted, as below:

def first(n):
    return n[0]

def sort_list_first(tuples):
    return sorted(tuples, key=first)

# You will see that after running this code, the output is sorted accordingly.


