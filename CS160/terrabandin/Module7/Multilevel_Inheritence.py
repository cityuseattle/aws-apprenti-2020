class Animal:
    #Constructor
    def __init__(self, name):
        self.name = name
        #to get name
    def getName(self):
        return self.name

#Inherited or Sub class (Note Animal in bracket)
class Dog(Animal):
    #Constructor
    def __init__(self, name, age):
        Animal.__init__(self, name)
        self.age = age
    #to get name
    def getAge(self):
        return self.age

#Inherited or Sub class (Note Dog in bracket)
class pug(Dog):
    #Constructor
    def __init__(self, name, age, color):
        Dog.__init__(self, name, age)
        self.color = color
    #to get color
    def getColor(self):
        return self.color

#driver code
ob = pug("PugPug", 2, "Brown")
print(ob.getName(), ob.getAge(), ob.getColor())