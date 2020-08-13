#Task 3
#loop through all dict's key-value pairs, through
#its keys or through its values

alien_0 = {"color": "green", "points": 5}
alien_1 = {"color": "yellow", "points": 10}

aliens = [alien_0, alien_1]

#Accessing key,value
for i in aliens:
    for key,value in i.items():
        print("KEY: ", key, "\t", "VALUE :", value)