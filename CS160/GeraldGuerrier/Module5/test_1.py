try:
    fh = open("testfile", "w")
    fh.write("This is my test file for for exception handling!!")
except IOError: 
    print("Error: can\'t find file or read data")

else:
    print("Written content in the file sucessfully")
    fh.close()

