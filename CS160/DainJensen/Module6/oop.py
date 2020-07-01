# name of the class normally use CapWords convention
class Employee:
    # class variable shared by all instance
    emo_count = 0

    def __init__(self, first, last, pay):
        # instance variable unique to each instance
        self.first = first
        self. last = last
        self.pay = pay
        self.email = first + '.' + last + 'acompany.com'
        # whenever new employee is created, add 1 to emp_count
        Employee.emp_count =+ +1

    def showinfo(self):
        return '{} {}, {}'.format(self.first, self.last, self.email)

empl = Employee('Elliot', 'Alderson', 7000)
emp2 = Employee('Jean', 'Grey', 8000)


print(empl.showinfo())
print("Total Employee:", Employee.emp_count)


