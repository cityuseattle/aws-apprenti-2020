#Accesing
dict = { 'Name': 'abc', 'Age': 7 }
print ('Name : ', dict['Name'] , '\n', 'Age : ', dict ['Age'] )

#Updating
dict [ 'Age'] = 20
print ( 'Updated Age :', dict ['Age'])

#Adding
dict [ 'Phone No.' ] = 123456789
print ( 'After adding the new pair :', dict )

#Deleting
del dict [ 'Phone No.' ]
print ( 'After deleting Phone No. :', dict )
