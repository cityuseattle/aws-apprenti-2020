def printme(str):
    print(str)
    return
printme('First function')
printme("second function call")

def numbers(limits):
    i=0
    number=[]

    while i<limits:
        number.append(i)
    return number


user_limit=int(input('limit: '))
print(numbers(user_limit))