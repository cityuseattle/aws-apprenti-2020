#Parent Class
class Dog:
    
    # Class attribute
    species = 'mammal'

    #Initializer / Instance attributes
    def __init__(self, name, age):
        self.name = name
        self.age = age

    #instance method
    def description(self):
        return f"{self.name} is {self.age} years old."
    
    def speak(self, sound):
        return f"{self.name} says {sound}."

#Child Class (inherits from Dog Class)
class RussellTerrier(Dog):
    def run(self, speed):
        return f"{self.name} runs {speed}."

#Child Class (inherits from Dog Class)
class Bulldog(Dog):
    def run(self, speed):
        return f"{self.name} runs {speed}."


#Child classes inherit attributes and
#behaviors from the parent class
doge = Bulldog("Doge", 12)
print(doge.description())

#Child classes have specific attributes
#and behaviors as well
print(doge.run("slowly"))