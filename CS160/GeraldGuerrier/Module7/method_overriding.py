class person:
    def _init_(self, name, age):
        self.name = name
        self.age = age

    def displayerData(self):
        print('In parent class displayData method')
        print(self.name)
        print(self.age)

class Employee(person):
    def _init_(self, name, age, id):
        #calling constructor of super class
        super().__init__(name, age)
        self.empId = id 
    
    def displayerData(self):
        print('In child class displayData method')
        print(self.name)
        print(self.age)
        print(self.empId)

#Person class object
person = person('john', 40)
person.displayerData()
#employee class object
emp = Employee('John', 40, 'E005') 
emp.displayerData()       
        

    