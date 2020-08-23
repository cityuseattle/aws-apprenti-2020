income = {'Alice': 90000,'Bob':10000, 'jeff': 200000, 'apiwat':999998, "stark": 999999}

highest = max(income, key=income.get)
print("The richest man on earth:", end='')
print(highest + ' with $' + str(income[highest]))