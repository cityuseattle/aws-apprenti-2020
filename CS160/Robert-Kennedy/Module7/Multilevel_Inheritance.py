class Animal:
    #Constructor
    def __init__(self, name):
        self.name = name
    #To get a name
    def getName(self):
        return self.name

#Inheritance or Sub class (Note Animal in bracket)
class Dog(Animal):
    #Constructor
    def __init__(self, name, age):
        Animal.__init__(self, name)
        self.age = age
    # To get name
    def getAge(self):

#Inherited or Sub class (Note Dog in bracket)
class pug(Dog):
    #Constructor
    def __init__(self, name, age, color):
        Dog.__init__(self, name, age)
        self.color = color
    # To get color
    def getColor(self):
        return self.color

#Driver Code
ob = pug("PugPug", 2, "Brown")
print(ob.getName(), ob.getAge(), ob.getColor())