class Parrot:
    def fly(self):
        print("parrot can fly.")
    def swim(self):
        print("parrot can't swim.")

class Penguin:
    def fly(self):
        print("Penguin can't fly.")
    def swim(self):
        print("Penguin can swim.")

#Common inteface
def flying_test(bird):
    bird.fly()
#instanciate objects
blu=Parrot()
peggy=Penguin()

#passing the object
flying_test(blu)
flying_test(peggy)