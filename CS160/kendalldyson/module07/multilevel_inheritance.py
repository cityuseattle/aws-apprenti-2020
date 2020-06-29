class Animal:
    #constructor
    def __init__(self, name):
        self.name= name
    #to get name
    def getName(self):
        return self.name
#Inherited or sub class (note Animal in bracket)
class Dog (Animal):
    #constructor
    def __init__(self, name, age):
        Animal.__init__(self, name)
        self.age= age
    #To get name
    def getAge(self):
        return self.age

class pug(Dog):
    #constructor
    def __init__(self, name, age, color):
        Dog.__init__(self, name, age)
        self.color= color
       #TO get color
    def getColor (self):
        return self.color

ob = pug("PugPug", 2, "Brown")
print(ob.getName(), ob.getAge(), ob.getColor()) 
