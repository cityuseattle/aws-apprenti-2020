try:
    fh = open("testfile","w")
    fh.write("This is my test fi8le for exception hangling!!")
except IOError:
        print ("Error: can\'t find file or read data")
else: 
        print("Written content in the file successfully")
        fh.close()