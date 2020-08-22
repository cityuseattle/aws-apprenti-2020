list1 = ["physics", "chemistry", 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7]
print("list1[0]: ", list1[0])
print("list2[0]: ", list2[1:5])


print("Value available at index 2: ")
print(list1[2])
list1[2] = 2001
print("New value available at index 2 : ")
print(list1[2])


list1.append(2020)
print("New List:", list1)
list1.insert(0, "Python")
print("After inserting: ", list1)

