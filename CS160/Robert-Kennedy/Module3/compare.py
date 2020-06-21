# compare two list
first = ['cats','dogs',55]
second = ['dogs',55, 'cats']
print(first==second)

# compare two dictionary, order does not matter
first_dict = {'name': 'aaa', 'species': 'human', 'age': 20}
second_dict = {'species': 'human', 'age': 20, 'name': 'aaa'}
print(first_dict==second_dict)