income = {'Alice': 90000,
           'Bob': 10000,
           'Jeff': 20000,
           'Apiwat': 999998,
           'Stark': 9999999}

highest = max(income, key=income.get)
print("The richest man on earth:", end=' ')
print(highest + ' with $' + str(income[highest]))