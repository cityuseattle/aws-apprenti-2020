## All about dictionaries

# Dictionaries are like a storage closet for different values
# The data are enclosed in curly braces, and each entry is seperated by a comma
# The key-value pairs are seperated by a colon.

# There are various ways to interact with the dictionary:

# Accessing
dict = {'Name': 'abc', 'Age': 7}
print ("Name : ", dict['Name'] ,"\n" , "Age :", dict['Age'])

# updating
dict['Age']= 20
print("Updated Age :", dict['Age'])

# Adding
dict['Phone_no']= 123456789
print("After adding the new pair :", dict)

# Deleting
del dict['Phone_no']
print("After deleting phone_no :", dict)

# If you run this code, you'll see the following output:
'''
Name :  abc 
 Age : 7
Updated Age : 20
After adding the new pair : {'Name': 'abc', 'Age': 20, 'Phone_no': 123456789}
After deleting phone_no : {'Name': 'abc', 'Age': 20}
'''

# Note that Python will not allow you to make duplicate entries. 
# If a duplicate is created, the most recent creation will replace the other.

# Something else to note, is dictionaries are not orded;
# Two dictionaries can have the same information, but in different order.
# When compared, the two will return true. 

# So let's compare:
# lists:
first = ['cats','dogs',55]
second = ['dogs',55, 'cats']
print(first==second)

# dictionaries:
first_dict = {'name': 'aaa', 'species': 'human', 'age': 20}
second_dict = {'species': 'human', 'age': 20, 'name': 'aaa'}
print(first_dict==second_dict)

# If inputted as above, the terminal will return:
# FALSE
# TRUE

# Looping in the dictionary

# Since dictionaries can contain up to millions of key:pair values it will be useful to understand to how to loop with a dictionary

alien_0 = {'color': 'green', 'points': 5}
alien_1 = {'color': 'yellow', 'points': 10}

aliens = [alien_0,alien_1]

# Accessing key,value

for i in aliens:
    for key,value in i.items():
        print("KEY: ", key, "\t" , "VALUE :", value)

# Output should look like:
'''
KEY:  color      VALUE : green
KEY:  points     VALUE : 5
KEY:  color      VALUE : yellow
KEY:  points     VALUE : 10
'''

# Now creating a program to find the richest man in the dictionary:

income = {'Alice': 90000,
          'Bob': 100000,
          'Jeff': 200000,
          'Apiwat': 999998,
          'Stark': 999999}
highest = max(income, key=income.get)
print("The richest man on earth:", end+' ')
print(highest + ' with $' + str(income[highest]))

# Output:
'''
The richest man on earth: Stark with $999999
'''

# One useful thing you can do with a dictionary is count the number of times a character occures in the dictionary:

import pprint
message = """Peter Piper picked a peck of pickled peppers
            A peck of pickled peppers Peter Piper picked
            If peter Piper picked a peck of pickled peppers
            Where's the peck of pickled peppers Peter Piper picked?"""

count = {}
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)

# The output will display the number of each type of character in the tongue twister

# Now, let's 'set'. A set is a collection which is unordered and unindexed. In python, sets are written with cury brackets.

# eg:
thisset = {"apple", "banana", "cherry"}

