######

class Computer: 
    def __init__(self):
        self.__maxprice = 900
    def sell(self):
        print ("Selling price: {}".format(self.__maxprice))
    def setmaxprice(self,price):
        self.__maxprice = price

c = Computer()
c.sell()

## change price, this doesn't work 
c.__maxprice = 1000 
c.sell()

### Using setter function 
c.setmaxprice(1000)
c.sell()

