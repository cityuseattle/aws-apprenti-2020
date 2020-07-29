class Employee:
    emp_count=0
    def __init__(self,first, last, pay):
        self.first=first
        self.last=last
        self.pay=pay
        self.email=first+'.'+last+'@fakemail.com'
        Employee.emp_count+=1
    def showinfo(self):
        return '{} {}, {}'.format(self.first, self.last, self.email)
'''
emp1=Employee()

emp2=Employee()
print(emp1)
print(emp2)

emp1.first="Elliot"
emp1.last= 'Alderson'
emp1.email="elliot.alderson@fakemail.com"
emp1.pay=7000

emp2.first="Tara"
emp2.last= 'Bann'
emp2.email="tara.bann@fakemail.com"
emp2.pay=6000
'''
emp1=Employee('Suzan',"Gurung",6000)
emp2=Employee('John',"Jean",5000)

print(emp1.showinfo())
print("Total Employee: ", Employee.emp_count)