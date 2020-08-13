# exceptions


try:
    fh=open("testfile", "w")
    fh.write("This is my test file for exeption handling!!")
except IOError:
    print("Error: Can't find or read data")
else:
    print("Writen content in the file succesfully")
    fh.close()