# Parent class:
class Dog:

    # class attribute
    species = 'mammal'

    # Initializer / Instances 
    def __init__(self,name,age,sound):
        self.name = name
        self.age = age
        self.sound = sound

    # methods 
    def description(self):
        return "{} is {} years old".format(self.name, self.age)
    def speak (self):
        return "{} says {}".format(self.name, self.sound)

# Child class (Inherits from Dog Class)
class RussellTerrier(Dog):
    def run(self,speed):
        return "{} runs {}".format(self.name, speed)
# Child class (Inherits from Dog Class)
class Bulldog(Dog):
    def run(self, speed):
        return "{} runs {}".format(self.name, speed)

# Child class inherit attribute and methods/behaviors from parent class
jim = Bulldog("Jim", 12, 'arr')
print (jim.description())

print (jim.run('Slowly'))