class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def displayData(self):
        print('In parent class displayData method')
        print(self.name)
        print(self.age)

class Employee(Person):
    def __init__(self, name, age, id):
        super().__init__(name, age)
        self.empId = id

    def displayData(self):
        print('In child class displayData method')
        print(self.name)
        print(self.age)
        print(self.empId)

person = Person('John', 40)
person.displayData()

emp = Employee('John', 40, 'E005')
emp.displayData()