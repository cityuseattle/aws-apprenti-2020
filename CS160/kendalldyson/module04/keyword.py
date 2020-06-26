def describe_pet (animal_type, pet_name, color="brown"):
    print(f"\nI have a {animal_type}.")
    print(f"My {animal_type}'s name is {pet_name.title()}. its color is {color}.")
describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')