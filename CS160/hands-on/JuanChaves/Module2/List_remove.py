#del
motorcycles = ['honda', 'yamaha', 'suzuki']
del motorcycles[1]
print(motorcycles)

#re-added yamaha
motorcycles[1] = 'yamaha'

#pop
popped_motorcycles = motorcycles.pop()
print(motorcycles)
print(popped_motorcycles)
first_owned = motorcycles.pop(0)
print(f"The first motorcycle I owned was a: {first_owned}")