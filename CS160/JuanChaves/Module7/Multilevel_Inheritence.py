class Animal:
    #Constructor
    def __init__ (self, name):
        self.name = name
    # To get name
    def getName(self):
        return self.name

class Dog(Animal):
    #Constructor
    def __init__(self, name, age):
        Animal.__init__(self, name)
        self.age = age
    #To get name
    def getAge(self):
        return self.age

#Inherited of Sub class (Note Dog in bracket)
class Pug(Dog):
    #Constructor
    def __init__(self, name, age, color):
        Dog.__init__(self, name, age)
        self.color = color
    #To get color
    def getColor(self):
        return self.color

#Driver code
ob = Pug("PugPug", 2, "Brown")
print(ob.getName(), ob.getAge(), ob.getColor())