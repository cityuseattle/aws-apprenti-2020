try:
    fh = open("testfile", "r")
    try:
        fh.write("This is my test for exception handling!!")
        raise IOError
    finally:
        print("Going to close the file")
except IOError:
    print("Error: can't find file or read data")