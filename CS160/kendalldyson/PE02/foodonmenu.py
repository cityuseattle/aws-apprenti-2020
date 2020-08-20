menu_items = ("fish", "pizza", "chicken","cake", "beer") 
 
print("You can choose from the following menu items:") 
for item in menu_items: 
    print("- " + item) 
 
menu_items = ("fries", "chips", "pasta","ice-cream", "sprite") 
 
print("\nour menu has been updated.") 
print("You can now choose from the following items:") 
for item in menu_items: 
    print("- " + item) 
 
menu_items[1]= "cheese" 