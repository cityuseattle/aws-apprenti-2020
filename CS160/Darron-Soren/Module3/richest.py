income = { 'Alice': 90000,
            'Bob': 100000,
            'Jeff': 200000,
            'Apiwat': 999998,
            'Start': 999999}

highest = max ( income, key = income.get )
print ( 'The rishest man on earth: ', end=' ')
print ( highest + ' with $' + str (income [highest]))
