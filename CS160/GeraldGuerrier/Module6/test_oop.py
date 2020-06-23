# # name of the class normally use CapWords convention
class Employee:

    def __init__(self, first, last, pay):
        # instance variable unique to each instance 
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + ' . ' + last + '@company.com'

    def showinfo(self):
        return '{} {}, {}'.format(self.first, self.last, self.email)
        
emp1 = Employee('Elliot' , 'Alderson' , 7000)
emp2 = Employee('Jean' , 'Grey' , 8000)

print(emp1.showinfo())
