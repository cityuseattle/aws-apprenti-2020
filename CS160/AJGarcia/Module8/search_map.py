import webbrowser
import sys

place = ''
if len(sys.argv) > 1:
    # Get address from command line
    place = 'texas'.join(sys.argv[1:])

webbrowser.open("https://google.com/maps/search/"+'place')
