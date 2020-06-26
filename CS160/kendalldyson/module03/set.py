#joining two sets
set1 = {"a", "b", "c"}
set2 = {1,2,3}
set3 = set1.union(set2)
print(set3)
set1.update(set2)
print(set1)

#constructor
thissset = set(("apple", "banana", "cherry")) #note the double round-brackets
print(thissset)