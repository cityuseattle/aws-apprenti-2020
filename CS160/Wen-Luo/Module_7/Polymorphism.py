###### 

class Parrot:

    def fly(self):
        print ("Parrots can fly!")
    
    def swim(self):
        print ("Parrots can't swim.")
class Penguin:

    def fly(self):
        print ("Penguin can't fly.")
    def swim(self):
        print ("Penguin can swim!")

#### Common Interface ##### 

def fly_test(bird):
    bird.fly()


### Create instance objects:
blu = Parrot()
peggy = Penguin()

### passing the obj 
fly_test(blu)
fly_test(peggy)
