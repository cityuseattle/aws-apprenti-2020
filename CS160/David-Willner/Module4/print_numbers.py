def numbers(limits):
    i = 0
    numbers =[]

    while i < limits:
        numbers.append(i)
        i=i+1
    return numbers

user_limit = int(input("give a limit"))
print(numbers(user_limit))