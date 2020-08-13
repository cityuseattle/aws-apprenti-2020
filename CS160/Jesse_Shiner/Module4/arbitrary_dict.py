# Arbitrary Dictionaries

def menu(item, quan, **restaurant):
    restaurant['Item'] = item
    restaurant['Quantity'] = quan
    return restaurant

restaurant = menu('soup', '1', location='seattle', zipcode='98109')
print(restaurant)
