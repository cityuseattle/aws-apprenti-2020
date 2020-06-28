import webbrowser
import sys

place = ''
if len(sys.argv) > 1:
    place = 'texas'.join(sys.argv[1:])

webbrowser.open("https://google.com/maps/search/" + 'place')
