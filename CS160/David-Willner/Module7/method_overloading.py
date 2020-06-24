class OverloadDemo:
    def sum(self, a, b, c=0):
        s = a+b+c
        return s

od = OverloadDemo()

sum = od.sum(7, 8)
print('sum is-', sum)
sum = od.sum(7,8,9)
print('sum is-', sum)