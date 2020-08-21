# open() or close() file with file name call 
# read returns an empty string after the texts 
# prints stripped version with .rstrip
with open ('hello.txt') as file_obj: 
        contents = file_obj.read()
print (contents.rstrip())