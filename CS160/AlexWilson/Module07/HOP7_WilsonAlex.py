# # ### Object Oriented Programming is more of a philosophy, than a language function
# # # It is:
# # # Modular
# # # Data hiding - kind of like what Apple does with their stuff
# # # Code reuse through
# # #     Composition - objects containing other objects
# # #     Inheritance - objects can inherit state and behavior of other objects
# # # Easier design due to natural modeling

# # # The higher the rank of a class, the broader its scope. 

# # # Child classes override or extend the functionality of the parent class

# ### Single Inheritence.py

# # Parent Class
# class Dog:
#     species = 'mammal'
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def description(self):
#         return "{} is {} years old".format(self.name, self.age)

#     def speak(self, sound):
#         return "{} says {}".format(self.name, sound)

# class RussellTerrier(Dog):
#     def run(self, speed):
#         return "{} runs {}".format(self.name, speed)

# class Bulldog(Dog):
#     def run(self, speed):
#         return "{} runs {}".format(self.name, speed)

# jim = Bulldog("Jim", 12)
# print(jim.description()) 

# print(jim.run("slowly"))


## Multiple Inheritace.py

# class Animal:
#     def __init__(self):
#         self.str1 = "Dog"
#         print("Base1")

# class Color:
#     def __init__(self):
#         self.str2 = "Black"
#         print("Base2")

# class Dog (Animal, Color):
#     def __init__(self):
#         #calling contructors of Animal and Color
#         Animal.__init__(self)
#         Color.__init__(self)
#         print("Derived")

#     def printStat(self):
#         print(self.str2, self.str1)

# ob = Dog()
# ob.printStat()


### Multilevel Inheritance.py
# Animal = Class; Dog = sub-Class; Pug = sub-sub-class

# class Animal:
#     # Constructor
#     def __init__(self, name):
#         self.name = name
#         # To get name
#     def getName(self):
#         return self.name

# # Inherited or Sub class (Note Animal in bracket)
# class Dog(Animal):
#     # Contructor
#     def __init__(self, name, age):
#         Animal.__init__(self, name)
#         self.age = age
#     # To get age
#     def getAge(self):
#         return self.age

# # Inherited or Sub class (Note Dog in bracket)

# class pug(Dog):
#     # Constructor
#     def __init__(self, name, age, color):
#         Dog.__init__(self, name, age)
#         self.color = color
#     # To get color
#     def getColor(self):
#         return self.color

# # Driver code
# ob = pug("PugPug", 2, "Brown")
# print(ob.getName(), ob.getAge(), ob.getColor())

### Encapsulation

# class Computer:

#     def __init__(self):
#         self.__maxprice = 900

#     def sell(self):
#         print("Selling Price: {}".format(self.__maxprice))

#     def setMaxPrice(self, price):
#         self.__maxprice = price

# c = Computer()
# c.sell()

# # change the price
# c.__maxprice = 1000
# c.sell()

# # using setter function
# c.setMaxPrice(1000)
# c.sell()

### Polymorphism

# class Parrot:

#     def fly(self):
#         print("Parrot can fly")

#     def swim(self):
#         print("Parrot can't swim")

# class Penguin:

#     def fly(self):
#         print("Penguin can't fly")

#     def swim(self):
#         print("Penguin can swim")

# # common interface
# def flying_test(bird):
#     bird.fly()

# # instantiate objects
# blu = Parrot()
# peggy = Penguin()

# # passing the object
# flying_test(blu)
# flying_test(peggy)

# ### Method overloading:

# class OverloadDemo:
#     # sum method with one default parameter
#     def sum(self, a, b, c=0):
#         s = a + b + c
#         return s

# od = OverloadDemo()
# # calling method with with 2 args
# sum = od.sum(7, 8)
# print('sum is-', sum)
# #calling method with 3 args
# sum = od.sum(7, 8, 9)
# print('sum is-', sum)


### Method overriding:

# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def displayData(self):
#         print('In parent class display Data method')
#         print(self.name)
#         print(self.age)

# class Employee(Person):
#     def __init__(self, name, age, id):
#         # calling contructor of super class
#         super().__init__(name, age)
#         self.empId = id
#     def displayData(self):
#         print('In child class diplayData method')
#         print(self.name)
#         print(self.age)
#         print(self.empId)

# # Person class object
# person = Person('John', 40)
# person.displayData()
# # Employee class object
# emp = Employee('John', 40, 'E005')
# emp.displayData()


### Operator overloading:

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    # overriding magic method
    def __add__(self, other):
        return self.x + other.x, self.y + other.y

p1 = Point(1, 2)
p2 = Point(3, 4)

print(p1+p2)
