#Single Inheritence

class Dog:
    #Class Attribute
    species = 'mammal'

    #Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    #instance method
    def description(self):
        return "{} is {} years old".format(self.name, self.age)

    #instance method
    def speak(self, sound):
        return "{} says {}".format(self.name, sound)

#child class (inherits from Dog class)
class RessellTerrier(Dog):
    def run(self, speed):
        return "{} runs {}".format(self.name, speed) 

#child class (inherits from Dog class)
class Bulldog(Dog):
    def run(self, speed):
        return "{} runs {}".format(self.name, speed)

#child classes inherit attributes and
#behaviors from the parent class
jim = Bulldog("Jim", 12)
print(jim.description())

#Child classes have specific attributes 
#and behaviors as well

print(jim.run("slowly"))