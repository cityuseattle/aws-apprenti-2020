class Restaurant():

    def __init__(self, restaurant_name=None, cuisine_type=None):
        self.name = restaurant_name
        self.type = cuisine_type

    def describe_restaurant(self):
        print(self.name)
        print(self.type)

    def open_restaurant(self):
        print(f"The restaurant is open. Welcome to {self.name}")

restanrant = Restaurant("Hibachi Buffet", "Chinese&Japanese Cusine")
restanrant.describe_restaurant()
restanrant.open_restaurant()

restanrant2 = Restaurant("Jamica No.1", "Jamican Food")
restanrant2.describe_restaurant()
restanrant2.open_restaurant()