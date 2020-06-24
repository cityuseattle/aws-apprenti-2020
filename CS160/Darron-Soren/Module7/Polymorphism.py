class Parrot:

    def fly (self):
        print ("Parrot can fly")

    def swim (self):
        print ("Parrot can't swim")

class Penquin:

    def fly (self):
        print ("Penquin can't fly")

    def swim (self):
        print ("Penquin can swim")

def flying_test (bird):
    bird.fly ()

blu = Parrot ()
peggy = Penquin ()

flying_test (blu)
flying_test (peggy)

