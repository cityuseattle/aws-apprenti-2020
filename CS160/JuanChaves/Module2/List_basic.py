list1 = ['physics', 'chemestry', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7]
#accessing
print("list1[0]: ",list1[0])
print("list2[1:5]: ",list2[1:5])
#updating
print(f"Values available at index 2: {list1[2]}")
list1[2] = 2001
print(f"The new value available at index 2: {list1[2]}")
#Append
list1.append(2020)
print(f"New List: {list1}")
#Insert
list1.insert(0, 'Python')
print(f"After inserting: {list1}")