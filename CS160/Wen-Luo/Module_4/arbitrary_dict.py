# --------- 
def menu(item, quan, **restaurant):
    restaurant['Item'] = item 
    restaurant['Quantity'] = quan
    return restaurant

restaurant = menu('soup', '1', Location = 'seattle', zipcode = 98108)
print ( restaurant)