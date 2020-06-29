class User():
    


    def __init__(self, first_name,()
        self.last_name = last_name.title()
        self.username = username
        self.email = email
        self.location = location.title()


    def describe_user(self):
        print("\n" + self.first_name + " " + self.last_name)
        print("  Username: " + self.username)
        print("  Email: " + self.email)
        print("  Location: " + self.location)


    def greet_user(self):
        print("\nWelcome back, " + self.username + "!")

eric = User('sample', '1', 'sample_1', 's_1@example.com', 'alaska')
eric.describe_user()
eric.greet_user()

willie = User('sample', '2', 'sample_2', 's_2@example.com', 'seattle')
willie.describe_user()
willie.greet_user()


