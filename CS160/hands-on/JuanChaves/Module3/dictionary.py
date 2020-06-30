#Accessing
dict = {'Name': 'abc', 'Age': 7}
print (f"Name: {dict['Name']} \nAge: {dict['Age']}")

#Updating
dict['Age'] = 20
print (f"\nUpdated Age: {dict['Age']}")

#Adding
dict['Phone_no'] = 123456789
print (f"\nAfter adding the new pair: {dict}")

#Deleting
del dict['Phone_no']
print (f"\nAfter deleting Phone_no: {dict}")