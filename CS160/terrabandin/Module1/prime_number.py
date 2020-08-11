# task 1

num = int(input("Enter a number: "))

if num > 1:
    for i in range(2, num/2):
        if (num % i) == 0:
            print(num, "is not a prime number.")
            print(i, "times", num/i, "is", num, ".")
            break
    else:
        print(num, "is a prime number.")

else:
    print(num, "is not a prime number.")


# task 2
def fibonacci():
    num = int(input("How many Fibonacci numers would you like to generate? "))

    if num == 0:
        return [0]
    if num == 1:
        return [1]
    sequence = [0, 1]
    for _ in range(2, num):
        n = sequence[-1] + sequence[-2]
        sequence.append(n)
    return sequence



print(fibonacci())

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
    try:
        age = int(age)  #this will change the type if it isn't quit

        if age < 3:
            print("Your ticket is free!")
        elif age <= 12:
            print("Your ticket is $10!")
        else: # age > 12:
            print("Your ticket is $15!")
    except Exception:
        print("Error: Enter a numerical value.")
    

# task 5 star pyramid

def star_pyramid(n):
    k = 2 * n - 2
    for i in range(0, n):
        # print spaces before pyramid
        print(" " * k, end="")
        # print i+1 stars
        print("* " * (i+1))
        k = k - 1
n = 5
star_pyramid(n)