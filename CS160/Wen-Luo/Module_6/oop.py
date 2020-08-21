class Employee: 
    # Class variable shared by all instances 
    emp_count = 0
    def __init__(self,first,last,pay):
        # instances variable unique to each instance 
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'

        # Adds new employee to employee count 
        Employee.emp_count += 1

    def showinfo(self):
        return '{} {},{}'.format(self.first, self.last, self.email)


emp1 =Employee('Elliot','Alderson', 7000)
emp2 = Employee('Jean', 'Grey', 8000)

print (emp1.showinfo())
print ("Total Employee:", Employee.emp_count)