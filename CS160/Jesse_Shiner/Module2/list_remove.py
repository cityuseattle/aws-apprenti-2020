#deleting from list
#and pop

motorcycles = ['honda', 'yamaha', 'suzuki']
popped_motorcycles = motorcycles.pop()
print("Original list: ", motorcycles)
del motorcycles[1]
print("New List: ", motorcycles)
print("Popped list: ", popped_motorcycles)
first_owned = motorcycles.pop(0)
print("The first motorcycle I owned was a", first_owned)

#remove
motorcycles = ['honda', 'yamaha', 'suzuki', 'ducati']
motorcycles.remove('ducati')
print(motorcycles)