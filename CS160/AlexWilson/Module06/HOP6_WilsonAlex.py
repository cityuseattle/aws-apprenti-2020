### This HOP will be talking about and implementing classes
#First we'll create a class called employee:

# Employee

class Employee:
    # class variable shared by all instances
    emp_count = 0
    
    def __init__(self, first, last, pay):
        # instance variable unique to each instance
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'
        # whenever new employee is created, add 1 to emp_count
        Employee.emp_count += 1

    def showinfo(self):
        return '{} {}, {}'.format(self.first, self.last, self.email)

emp1 = Employee('Elliot', 'Alderson', 7000)
emp2 = Employee('Jean', 'Grey', 8000)

print(emp1.showinfo())
print("Total Employees:", Employee.emp_count)