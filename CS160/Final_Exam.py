IN [275]: int(9.1 + 0.9)

import math #I did one with a builit in function and without it

quantity = 3.7 

roundup = math.ceil(quantity)
print(roundup)

import math

number = 4.5
rounder = math.ceil(number)
print(rounder)



# Python code to Find maximum of list in nested list 

# Initialising List 
list_nums = [[6, 1, 2, 3], [5, 2, 11], [4, 9, 22], [-3, 9, 13], [10, 1]]

# find max in list 
b = [max(p) for p in list_nums] 

# Printing max 
print(b) 

d1 = {'a': 10, 'b': 2, 'd': 6, 'e': 1}
d2 = {'f': 6, 'g': 1}
d3 = {**d1, **d2}
for letter, count in d3 ,items
if count > 3:
    print(letter)

x[0].istittle() == x[0].isupper()

 strings = ["How", "are", "you", "today", "John?", "123", " ", ""]
    out = [s for s in strings if s[0].isupper()]
    print(out)
except:
    print("Index out of range")