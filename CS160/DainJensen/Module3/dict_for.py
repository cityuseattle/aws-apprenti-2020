alien_0 = {'color': 'green', 'points': 5}
alien_l = {'color': 'yellow', 'points': 10}

aliens = [alien_0,alien_l]

#Accessing key,value
for i in aliens:
    for key,value in i.items():
        print("KEY: ", key, "\t" , "VALUE :", value)



        