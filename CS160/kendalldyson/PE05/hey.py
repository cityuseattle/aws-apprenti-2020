def count_words(hey.txt):
   with open(hey.txt) as f:
       data = f.read()
       data.replace(",", " ")
       return len(data.split(" "))
print(count_words("hey.txt"))
