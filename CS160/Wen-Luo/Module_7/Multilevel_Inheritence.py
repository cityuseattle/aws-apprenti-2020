#### 

class Animal:
    ### This is a contructor 
    def __init__(self, name):
        self.name = name 
    
    # method to get name 
    def getname(self):
        return self.name

class Dog(Animal):
    ### Another contructor 
    def __init__(self, name, age):
        ## calling the Animal contructor 
        Animal.__init__(self,name)
        self.age = age 
    ## method to get age
    def getage(self):
        return self.age

#### Inherited or sub class (Dog in bracket )
class pug(Dog):
    ### create its own constructor
    def __init__(self, name, age, color):
        # Calling dog class constructor 
        Dog.__init__(self, name, age)
        self.color = color 

    ### method to get color 
    def getcolor(self):
        return self.color

##### Derive code 
ob = pug('Pugpug', 2, 'Brown')
print (ob.getname(), ob.getage(), ob.getcolor())