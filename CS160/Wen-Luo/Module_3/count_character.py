import pprint

message= """ Peter Piper picked a peck of pickled peppers 
            A peck of pickled peppers Peter Pipper picked 
            If Peter Pipper picked a peck of pickled peppers 
            where's the peck of pickled pepper Peter Piper picked? """
    
count = {}
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)