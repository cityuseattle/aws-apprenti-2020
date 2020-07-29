#accessing
dict={'name':'age', 'Age':7}
print("name", dict['name'], '\n','Age', dict['Age'])

#updating 
dict['Age']=20
print("Updated Age : ", dict['Age'])

#adding
dict['phone_no']=1234567892
print('After adding new pair', dict)

#deleting
del dict['phone_no']
print('after deleting phone_no: ', dict)