# Polymorphism

class Parrot:

    def fly(self):
        print("Parrots can fly")

    def swim(self):
        print("Parrots cannot swim")

class Penguin:
    
    def fly(self):
        print("Penguins cannot fly")

    def swim(self):
        print("Penguins can swim")

#Common interface
def flying_test(bird):
    bird.fly()

#instantiate objects
blu = Parrot()
peggy = Penguin()

#passing the object
flying_test(blu)
flying_test(peggy)