class Employee:
    emp_count = 0

    def  __init__(self, first, last, pay):

        self.first = last
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + 'acompany.com'
        Employee.emp_count += 1

    def showinfo(self):
        return '{} {}, {}'.format(self.first, self.last, self.email)

emp1 = Employee('Elliot', 'Alderson', 7000)
emp2 = Employee('Jean', 'Grey', 8000)

print(emp1.showinfo())
print('Total Employee:', Employee.emp_count)