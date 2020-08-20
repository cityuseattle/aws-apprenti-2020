L = [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}] 
u_value = set( val for dic in L for val in dic.values()) 
print("Unique Values: ",u_value) 