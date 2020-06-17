# task 1

num = int(input("Enter a number: "))

if num > 1:
    for i in range(2, num): # TODO: You can make this logic smarter/faster
        if (num % i) == 0:
            print(num, "is not a prime number.")
            print(i, "times", num//i, "is", num, ".") #TODO: Why num//i 
            break
    else:
        print(num, "is a prime number.")

else:
    print(num, "is not a prime number.")


# task 2
# need HELP
def fibonacci():
    num = int(input("How many fibonacci numbers would you like to generate?"))
    i = 1
    if num == 0:
        fib = []
    elif num == 1:
        fib = [1]
    elif num == 2:
        fib = [2]
    elif num > 2:
        fib = [1, 1]
        while i < (num - 1):
            fib.append(fib[i] + fib[i-1])
            i += 1
    return fib

print(fibonacci())
input()

# task 3
age = int(input("Enter your age: "))

if age < 2:
    print("You're a baby!")
elif age < 4: 
    print("You're a toddler!")
elif age < 13:
    print("You're a kid!")
elif age < 20:
    print("You're a teenager!")
elif age < 65:
    print("You're an adult!")
else:
    print("You're an elder!")

# task 4
ask_age = "How old are you? "
ask_age += "\nEnter 'quit' when you are finished. "

while True: 
    age = (input(ask_age))
    if age == "quit":
        break
    age = int(age)  #this will change the type if it isn't quit

    if age < 3:
        print("Your ticket is free!")
    elif age <= 12:
        print("Your ticket is $10!")
    elif age > 12:
        print("Your ticket is $15!")
    else:
        print("Please enter a number value.")

# task 5 star pyramid

def star_pyramid(n):
    k = 2 * n - 2
    for i in range(0, n):
        for _ in range(0, k):
            print(end=" ")
        k = k - 1
        for _ in range(0, i+1):
            print("* ", end="")
        print("\r")
n = 5
star_pyramid(n)