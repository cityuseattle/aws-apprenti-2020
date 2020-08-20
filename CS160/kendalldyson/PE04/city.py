def describe_city(city, country='US'):
    """Describe a city."""
    msg = city.title() + " is in " + country.title() + "."
    print(msg)

describe_city('Seattle')
describe_city('London', 'England')
describe_city('Kirkland')

