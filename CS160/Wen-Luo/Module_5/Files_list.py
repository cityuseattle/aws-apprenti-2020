filename = 'hello.txt'

with open (filename) as file_obj:
    lines = file_obj.readlines()

for line in lines:
    print(line.rstrip())