print("How old are you?")
age = int(input())

if age <= 2:
    print ('You are a baby.')
elif age >= 2 and age < 4:
    print('You are a toddler.')
elif age >= 4 and age < 13:   
    print('You are a kid')
elif age >= 13 and age < 20:
    print('You are a teenager')
elif age >= 20 and age < 65:
    print('You are an adult')        
else:
    print('you are an elder.')