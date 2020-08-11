try:
    fh = open("testfile", "r")
    fh.write("This is my testfile for exception handling!!")
except IOError:
    print("Error: can\'t find file or read data")
else:
    print("Written content in the file successfully")