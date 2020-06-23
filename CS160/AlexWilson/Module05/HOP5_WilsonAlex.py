### Learning to Deal with Files
# The three basic interactions one can have with a file are:
# 1. Open
# 2. Read/Write
# 3. Close

'''
file= open('hello.txt')
print(file.read())
##It didn't work....

with open('/Users/lexon/Desktop/Homework/CS_160/aws-apprenti-2020/CS160/AlexWilson/Module05/hello.txt') as file_object:
    contents = file_object.read()
print(contents.rstrip())

##File Mode

file = open('hello.txt', 'a')
file.write('\nThis is new content I just appended')
file.close()

new_file = open('world.txt', 'w')
new_file.write('This is new file')
new_file.close()

file = open('hello.txt')
content = file.read()
file.close()
print(content)

### Files_List

filename = 'hello.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

for line in lines:
    print(line.rstrip())


### Exceptions
# The syntax of exceptions is as follows:
# try:
#   You do your operations here;
#   ..................
# except Exception1:
#   If there is Exception1, then execute this block.
# except Exception2:
#   If there is Exception2, then execute this block.
# ......................
# else:
#   If there is no exception then execute this block.     
### Test 1
try:
    fh = open("testfile", "w")
    fh.write("This is my test file for exceptionhandling!!")
except IOError:
    print("Error: can\'t find file or read data")
else:
    print("Written content in the file successfully")
    fh.close

### Test 2

try:
    fh = open("testfile", "r")
    fh.write("This is my test file for exception handling!!")
except IOError:
    print("Error: can\'t find file or read data")
else:
    print("Written content in the file successfully")
'''


### try-finally Clause
# Syntax:
# try:
#   You do your operations here;
#   .......................
#   De to any exception, this may be skipped.
# finally:
#   This would always be executed.
# ..........................

try:
    gh = open("testfile", "w")
    try:
        gh.write("This is my test file for exception handling!!")
        raise IOError
    finally:
        print("Going to close the file")
except IOError:
    print("Error: can\'t find file or read data")
    
