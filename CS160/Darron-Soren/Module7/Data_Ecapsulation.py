class Computer:
    
    def __init__ (self):
        self._maxprice = 900

    def sell (self):
        print ( 'Selling Price: {}'.format (self._maxprice))

    def setMaxPrice (self, price):
        self._maxprice = price 

c = Computer ()
c.sell ()

c._maxprice = 1000
c.sell ()

c.setMaxPrice (1000)
c.sell ()
