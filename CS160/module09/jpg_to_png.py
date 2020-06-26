from Pillow import Image

img=Image.open('bulldog.jpg')
width, height= img.size
print('width: ',width, 'height', height)
if img.format == 'JPEG':
    img.save('bulldog2.png')