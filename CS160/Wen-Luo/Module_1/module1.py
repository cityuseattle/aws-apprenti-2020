# Module 1 PE 01 
###############################################################
# Question 1 Prime Numbers, check if a number is a prime number. 
# 1 is not a prime number, exclude by setting condiditon num>1
# range from 2 to Number-1 to prevent dividing the number by itself 
num = int(input("Number to check:"))
if num > 1:
    for i in range(2, num-1):
      if num % i == 0:
         print(num, "is not a prime number.")
         break
    else:
        print (num, " is a prime number")

else: 
    print (num, "is not a prime number.")

#################################################################
# Question 2 Fibonacci Sequence, print specified numbers of Fibonacci sequnce. 
# Fibonacci sequence = Fn = F(n-1)+ F(n-2)
# F0 = 1
# F1 = 1
# function Fibonacci_Series with predefined first and second term 
def Fibonacci_series(n):
    if n == 0:
        return 0
    if n ==1: 
        return 1
    if n >= 1:
        return (Fibonacci_series(n-1)+ Fibonacci_series(n-2))

# Print out specified terms with range()

term = int(input("How many Fibonacci Sequence terms would you like to print:" ))
for i in range (term):
    if i >= 0:
        print (Fibonacci_series(i))
    else: 
        print ("Please enter positive terms")

# To view a specific term. (Fibonacci_series (view-1)) off sets the  0th index. 

view = int(input("Which Fibonacci Term woud you like to view:"))
if view ==0:
        print ("Please enter a positive term number")
else:
        print (Fibonacci_series(view-1))

##################################################################
# Question 3: If elif chain
age = int(input("age ="))
if age < 2:
    print ("The person is a baby.")
elif age >= 4 and age <13:
    print ("The person is a kid.")
elif age >= 13 and age < 20: 
    print ("The person is a tennager.")
elif age >= 20 and age < 65:
    print ("The person is an adult.")
elif age >= 65:
    print ("The person is an elder.")


##################################################################
#Question 4: Movie ticket price 
AGE = int(input("How old are you?"))
if AGE < 3: 
     print("The ticket is free.")
elif AGE >=3 and AGE < 12:
    print ("The ticket is $10.")
elif AGE >=12: 
    print("The ticket is $15")

##################################################################
#Question 5: Print a pattern with loop 
# five rows 
# print spaces 
# print the * and spaces
# move on to next row
for i in range(0,5):  
    for j in range(0,4-i):
        print( end=" ")
    for j in range(0,i+1):
        print("*", end=" ")
    print ()

          






    
