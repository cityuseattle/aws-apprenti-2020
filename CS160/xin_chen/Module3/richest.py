while True:
    try:
        num1 = int(input("Please enter a number: "))
        num2 = int(input("Please enter another number: "))
        sum = num1 + num2
        print("Good number" + ", the sum of the two number is : " + str(sum))
        break
    except ValueError:
        print("Invalid input, please enter it again.")