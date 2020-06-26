#Author: Beau Harris
#HOP 09

from PIL import Image

img = Image.open("Module09/bulldog.jpg")

width, height = img.size
print('Width:', width, 'Height:', height)

if img.format == 'JPEG':
    img.save('bulldog2.png')