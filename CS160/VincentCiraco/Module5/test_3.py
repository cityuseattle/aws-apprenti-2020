try:
    fh=open("testfile", "W")
    try:
        fh.write("This is my test file for exception handling")
        raise IOError
    finally:
        print("Going to close the file")
except IOError:
    print("Error : can\'t find the file or read data")