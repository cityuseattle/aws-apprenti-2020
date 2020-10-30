class parrot:

    def fly(self):
        print("Parrot can fly")

    def swim(self):
        print("Parrot can't swim")

class Penguin:

    def fly(self):
        print("Penguin can't fly")

    def swim(self):
        print("Penguin can swim")

def flying_test(bird):
    bird.fly()

blu = parrot()
peggy = Penguin()

flying_test(blu)
flying_test(peggy)
