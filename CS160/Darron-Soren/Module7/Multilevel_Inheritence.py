class Animal:
    def __init__ (self, name):
        self.name = name
    
    def getName (self):
        return self.name

class Dog (Animal):
    def __init__ (self, name, age):
        Animal.__init__ (self, name)
        self.age = age

    def getAge (self):
        return self.age

class pug (Dog):
    def __init__ (self, name, age, color):
        Dog.__init__ (self, name, age)
        self.color = color

    def getColor (self):
        return self.color

ob = pug ('PugPug', 2 , 'Brown')
print (ob.getName(), ob.getAge(), ob.getColor())
