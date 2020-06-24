class Animal:
    # Constructor
    def __init__(self, name):
        self.name = name
        # To get name
        def getName(Self):
            return self.name

# Inherited or sub class (Note animal in bracket)
class Dog(Animal):
    # Constructor 
    def __init__(self, name, age):
        Animal.__init__(self, name)
        self.age = age
    # To get name
    def getAge(self):
        return self.age
    
# Inherited or sub class (Note dog in bracket)
class pug(Dog):
    # Constructor
    def __init__(self, name, age, color):
        Dog.__init__(self, name, age)
    # To get color
    def getColor(self):
        return self.color 

# Driver code
ob = pug("PugPug", 2, "Brown")
print(ob.getName(), ob.getAge(), ob.getColor())