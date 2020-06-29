print("How old are you?")
age = int(input())

if age <= 3:
    print ('Ticket is free.')
elif age >= 3 and age <= 12:
    print('Ticket is $10.')       
else:
    print('Ticket is $15.')