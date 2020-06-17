a = 20
b = 20

if ( a is b ):
    print ("Line 1 - a and b have same identity")
else:
    print ("Line 1 - a and b do not have same identity")

if ( id(a) == id(b) ):
    print ("Line 2 - a and b have same identity")

b = 30
if ( a is b ):
    print ("Line 3 - a and b have same identity")
else:
    print ("Line 3 - a and b do not have same identity")

if (a is not b ):
    print ("Line 2 - a and b do not have same identity")
else:
    priint ("Line 4 - a and b have same identity")