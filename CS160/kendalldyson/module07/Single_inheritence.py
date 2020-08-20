#parent class
class Dog:
    #class attribute
    species = 'mammal'
    #intializer
    def __init__(self, name, age):
        self.name = name  
        self. age = age
    #instance method
    def description(self):
        return "{} is {} years old".format(self.name, self.age)
    #instance method
    def speak(self, sounds): 
        return "{} says {}".format(self.name, sound)

#child class (inhereits from dog class)
class RussellTerrier(Dog):
    def run(self, speed):
        return "{} runs {}".format(self.name,speed)

class Bulldog(Dog):
     def run (self,speed):
        return "{} runs {}".format(self.name,speed)      

jim = Bulldog("Jim", 12)
print(jim.description())

print(jim.run("Slowly"))