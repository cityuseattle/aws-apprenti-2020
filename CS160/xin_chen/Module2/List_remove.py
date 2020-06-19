# removing an element with del
motorcycles = ["honda", "yamaha", "suzuki"]
del motorcycles[1]
print(motorcycles)

# removing an element with pop
motorcycles = ["honda", "yamaha", "suzuki"]
popped_motorcycle = motorcycles.pop()
print(motorcycles)
print(popped_motorcycle)
first_owned = motorcycles.pop(0)
print("The first motorcycle I owned was a: ", first_owned)

# removing an element with .remove()
motorcycles = ["honda", "yamaha", "suzuki", "ducati"]
motorcycles.remove("ducati")
print(motorcycles)