print("For-Continue")
for letter in 'Python':
    if letter == 'h':
        continue
    print ('Current Letter :', letter)

print("\nWhile-Continue")
var = 10
while var > 0:
    var = var -1
    if var == 5:
        continue
    print ('Current variable value :', var)
print ("Good bye!")