class Family:
    def show_family(self):
        print("This is our family:")
 
# Father class inherited from Family
class Father(Family):
    fathername = ""
 
    def show_father(self):
        print(self.fathername)
 
# Mother class inherited from Family
class Mother(Family):
    mothername = ""
 
    def show_mother(self):
        print(self.mothername)
 
# Son class inherited from Father and Mother classes
class Son(Father, Mother):
    def show_parent(self):
        print("Father :", self.fathername)
        print("Mother :", self.mothername)

s1 = Son()  # Object of Son class
s1.fathername = "XXX"
s1.mothername = "YYY"
s1.show_family()
s1.show_parent()

