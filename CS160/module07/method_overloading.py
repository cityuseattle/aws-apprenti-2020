class OverloadeDemo:
    #sum method with one default parameter
    def sum(self, a,b , c=0):
        s=a+b+c
        return s

od =OverloadeDemo()
#calling method with 2 args
sum=od.sum(5,8)
print('sum is ', sum)

#calling method with 3 args
sum=od.sum(5,8, 10)
print('sum is ', sum)

#polymorphism with inheritence
class Person:
    def __init__(self, name, age):
        self.name=name
        self.age=age

    def displayDate(self):
        print('In parent class displayData method')
        print(self.name)
        print(self.age)

class Employee(Person):
    def __init__(self, name, age,id ):
        #calling constructor of super class
        super().__init__(name,age)
        self.empId=id
    def displayDate(self):
        print('In child class displayData method')
        print(self.name)
        print(self.age)
        print(self.empId)

#Person class object
person=Person('John', 40)
person.displayDate()
#Employee class object
person=Employee('John', 40, 'E005')
person.displayDate()
