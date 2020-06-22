### This will be my Module 4 Submission
###Syntax:

# def funtionname( parameters ):
#   code
#   return [expression]

### myFunc.py
'''
def printme(str):
    print (str)
    return

# Now you can call printme function
printme("First call to user definted function!")
printme("Second call to the same function")

### print_numbers.py

def numbers(limit):
    i = 0
    numbers = []

    while i < limit:
        numbers.append(i)
        i = i + 1
    return numbers

user_limit = int(input("Give a limit: "))
print(numbers(user_limit))



### Positional Arguments

def describe_pet(animal_type, pet_name):
    print(f"\nI have a {animal_type}")
    print(f"My {animal_type}'s name is {pet_name.title()}.")

describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')

### Keyword Arguments

def describe_pet(animal_type, pet_name, color="brown"):
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}. It's color is {color}.")

describe_pet(animal_type='hamster', pet_name='harry')

### Arbitrary Arguments

def menu(*foods):
    print(foods)

menu("pizza")
menu('soup', 'fries', 'pizaa', 'pasta')


### Arbitrary Dictionary

def menu(item, quan, **restaurant):
    restaurant['Item'] = item
    restaurant['Quantity'] = quan
    return restaurant

restaurant = menu('soup', '1',Location='seattle',Zipcode='98109')
print(restaurant)
'''

### Storing function in Modules

def order_module(number, *lists):
    print(f"\nNumber of dishes: {number}, The dishes are:")
    for list in lists:
        print(f"- {list}")

### Order Menu
# See other python project "order_menu.py"



