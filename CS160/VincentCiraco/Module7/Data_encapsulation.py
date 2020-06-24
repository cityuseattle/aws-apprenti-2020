class computer:
    def __init__(self):
        self.__maxprice = 900
    def sell(self):
        print("selling Price: {}".format(self.__maxprice))
    def setMaxPrice(self, price):
        self.__maxprice = price

c = computer()
c.sell()

c.__max=1000
c.sell()

c.setMaxPrice(1000)
c.sell()