print("For_Break")
for letter in 'python':
    if letter == 'h':
        break
    print ('Current Letter :', letter)


print("\nWhile-Break")
var = 10
while var > 0:
    print ('Current variable  value :', var)
    var =  var -1
    if var == 5:
        break
print ("Good bye!")    