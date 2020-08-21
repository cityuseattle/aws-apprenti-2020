######## compare two list -----

first = ['cats', 'dogs',55]
second = ['dog',55,'cats']
print (first == second)


# ----- compare two dictionary, order DN matter 
first_dict = {'name' : 'aaa',
'species' : 'human',
'age' : 20 }
second_dict = {'species' : 'human', 
'age' : 20,
'name' : 'aaa'}
print (first_dict == second_dict)