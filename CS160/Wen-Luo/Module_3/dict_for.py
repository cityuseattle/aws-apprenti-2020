# -------- use multiple dictionaries inside loops -----
alien_0= {'color': 'green', 'points':5}
alien_1 = {'color' : 'green', 'points':5}
aliens = [alien_0,alien_1]

for i in aliens:
    for key,value in i.items():
        print ("KEY: ", key, "\t", "VALUE :", value)

