import pprint

message = """Peter Piper picked a peck of pickled peppers
            A peck pf pickled peppers Peter Piper picked
            If Peter Piper picked peck of pickled peppers
            Where's the peck of pickled peppers that Peter Piper picked?"""

count = {}
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

pprint.pprint(count)