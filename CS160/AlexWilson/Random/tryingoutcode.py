'''
x = 50
def func(x):
    print('x is', x)
    x = 2
    print('Changed local x to', x)
func(x)
print('x is now', x)
'''


'''
# To take input from the user
num = int(input("Check whether your number is prime: "))

'''
'''
is_it_prime = int(input("Enter a number here:  "))

if is_it_prime > 1:
    for i in range(1, is_it_prime + 1):
        if is_it_prime % i == 0:
            if (i == 1 or i == is_it_prime):
                continue
            else:
                print(is_it_prime, "is divisible, and therefore inferior")
                print(i, "x", is_it_prime//i, "=", is_it_prime)
                break
        else:
            print(is_it_prime, "is prime, and therefore a superior number")
else:
    print(is_it_prime, "is divisible, and therefore")

'''
'''
# Classroom exercise
x = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]

c = 0

O(NlogN)python3

for a in range(len(x)-1):
    print(f"main@{a} ...", x[a])
    c = a + 1
    for b in range(c, len(x)):
        print(f"main@{a}", x[a], f"sub@{b}", x[b])
        if x[a] == x[b]:
            dup.append(x[a])
            print("found dup", x[a])

    print(f"{a}", end=",")

'''
'''
d3 = {'f': 6, 'g': 11, 'a': 10, 'b': 8, 'd': 6, 'e': 11}

for (k, v) in d3.items():
    if v > 9:
        print("The Total is ", v)
    else:
        pass

for a in dup:
'''
### PE2
'''
dinner_invitees = ["Paul McCartney", "Joe Cocker", "Dave Grohl"]
print(dinner_invitees)
dinner_invitees[3] = "Dad"
dinner_invitees.insert(0, "Cow")
dinner_invitees.insert(3, "Phil")
dinner_invitees.append("Kodi")
print(dinner_invitees)
dinner_invitees.pop()
print("Sorry, we don't like you anymore, you're uninvited")
dinner_invitees.pop()
print("Sorry, we don't like you anymore, you're uninvited")
dinner_invitees.pop()
print("Sorry, we don't like you anymore, you're uninvited")
dinner_invitees.pop()
print("Sorry, we don't like you anymore, you're uninvited")
print(dinner_invitees)
'''


### PE3 - Concatentating Dictionaries
'''
dict1 = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5}
dict2 = {'f':6, 'g':7, 'h':8, 'i':9, 'j':10}

def Merge(dict1, dict2):
    res = {**dict1, **dict2}
    return res

dict3 = Merge(dict1, dict2)

print(dict3)
'''

### PE04 - Make_Shirt function

# Shirt_Sizes = {'L':'Large', 'M':'Medium', 'S':'Small'}

# In class on Friday:
###functions are stored in "stack memory"

### functions are stored like so:
# 3. function2()
# 2. function1()
# 1. main

'''
def function1(name):
    print(f"{msg} {name}!")
    function2(name, msg)

def function2(name):
    print(f"{msg} {name}!")

name = input("Enter a person's name: ")
msg = input("Enter greeting message: ")

function1(name, msg)

'''
'''
str1 = "My address is 15400 1st St SE Bothel WA 98012"
numbers = []
for c in str1:
    if(c.isdigit())
        numbers.append(c)
print(numbers)
'''

# numbers = [c for c in str1: if(c.isdigit()) numbers.append(c) int(numbers)]

'''
str1 = "My address is 12002 Roosevelt Way NE, APT A-103, Seattle WA 98125"
numbers =[c for c in str1 if(c.isdigit())] 

print(numbers)
'''
'''
while True:
    x = int(input("please enter a number"))
    x = x + 100
    print(x)
    break

'''
'''
### Value Error Exception
while True:
    try:
        x = int(input("please enter a number "))
        x = x + 100
    except ValueError:
        print("Wrong Input")
'''
'''
bGo = True
i = 0
while bGo and i < 3:
    try:
        x = (10/int(input("Enter a denominator : "))
        print(x)
    except ZeroDivisionError:
        print("Zero Division Error is raised")
        bGo = False
    except ValueError:
        print("Enter an interger buddy!")
        bGo = False
    i = i + i

if bGo == True:
     print (x)
else:
    x = -999
    print("Don't try this number since it may not be a correct value")

# How about storing a first character of each string to a list?
strings = ["How", "are", "you", "today", "John?", "", "!@!", ""]
# output: str_ = ['h']
out=[]
for s in strings:
    if len(s) > 0 and s[0].isupper():
        out.append(s[])
print(out)


f = None  

for i in range (5):  

   with open("data.txt", "w") as f:  

        if i > 2:  

            break  

print(f.closed) 

class Dog: 
    def __init__(self, name, age):
        self.name = name
        self.age = age
Dog("Rufus", 3)

print(Dog)

'''

class Dog: 

    def walk(self): 

        return "*walking*" 

    def speak(self): 

        return "Woof!" 

 

class JackRussellTerrier(Dog): 

    def speak(self): 

        return "Arff!" 

bobo = JackRussellTerrier() 

print(bobo.walk()) 
