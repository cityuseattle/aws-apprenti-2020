##### --------- Programming Exercise 07 ----------- #######

###### Question1 ############
### make class user:
## select the attributes for class user includung name, gender, age, SSN 
class User:
    ## define attributes 
    def __init__(self, first_name, last_name, gender,age, last_fourSSN):
        self.first_name = first_name
        self.last_name = last_name
        self.gender = gender 
        self.age = age 
        self.last_fourSSN = last_fourSSN
    # Define a method to describe each user 
    def describeuser(self):
        return ' Name: {} {} \n Gender: {} \n Age: {} \n Last Four SSN: {}'.format(
            self.first_name, self.last_name, self.gender, self.age,
            self.last_fourSSN )
    # define a method to greet each user 
    def greetuser (self):
        return 'Welcome {} !'.format(self.first_name)

### create two instances -user Scott and Jennifer and perform the methods in the class User 
user1 = User('Scott', 'Leigh', 'Male', '23', '5555')
user2 = User('Jennifer', 'Lorence', 'Female', '33', '5678')
print (user1.describeuser())
print (user1.greetuser())
print (user2.describeuser())
print (user2.greetuser())


###### Question 2 ######## 
# Show Multilevel Inheritence 
# Class Human is the parent class for Gender which is the parent class for Child 
# Child class inherited gender from its parent class Gender, and inherited its name from grandparent class Human. 
class Human:
    ### create its own constructor
    def __init__(self, name):
        self.name = name 
    # method to get name
    def getname(self):
        return self.name

class Gender(Human):
    ### create its own constructor
    def __init__(self, name, gender):
        ## calling the Human contructor 
        Human.__init__(self,name)
        self.gender = gender
    ## method to get gender 
    def getgender(self):
        return self.gender 

#### Inherited or sub class child from human and gender 
class Children(Gender):
    ### create its own constructor
    def __init__(self, name, gender, age):
        # Calling the Gender class constructor 
        Gender.__init__(self, name, gender)
        self.age = age

    ### method to get age 
    def getage(self):
        return self.age 

##### Derive code 
child = Children('Brandon','Male', 3)
print (child.getname(), child.getgender(), child.getage())


