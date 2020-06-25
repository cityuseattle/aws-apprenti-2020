class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    #overriding  magic  method
    def __add__(self , other):
        return self.x + other.x, self.y + other.y

p1 = Point(1, 2)
p2 = Point(3, 4)

print(p1+p2)
    