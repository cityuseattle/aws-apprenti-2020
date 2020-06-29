guest = ['Kendall', 'Misha', 'Luke']   
print("youre invited to dinner",guest) 
name = guest[1].title()  
print("\nSorry, " + name + " can't make it to dinner.")  
del(guest[1])   
guest.insert(1, 'Adam')   
print("\nNew list:", guest) 
guest.insert(0, 'Mike')   
guest.insert(2, 'Blanca')   
guest.append('Tori')   
print("\nNew List:", guest) 
while(len(guest) > 2): 
    print("Sorry, you are not invited :",guest.pop()) 
print("\nFinal guest list", guest) 