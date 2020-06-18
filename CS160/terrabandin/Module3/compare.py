#Task 2 = compare 2 lists and dictionary w/ similar values
#but different order

#compare 2 list
first = ["cats", "dogs", 55]
second = ["dogs", 55, "cats"]
print(first==second)

#compare 2 dictionary, order doesn't matter
first_dict = {"name": "aaa", "species": "human", "age": 20}
second_dict = {"species": "human", "age": 20, "name": "aaa"}
print(first_dict==second_dict)

