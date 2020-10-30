print ("For-Break")
for letter in 'Python':
    if letter =='h':
        break
    print('Current Letter :', letter)\

print("\nWhile-Break")
var = 10
While var > 0:
    print('Current variable value : ', var)
    var = var -1
    if var == 5:
        break
print("Good bye!")