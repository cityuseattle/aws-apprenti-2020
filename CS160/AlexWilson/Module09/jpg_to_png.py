from PIL import Image

# image info and changing format

# this returns value of img object data type
img = Image.open('bulldog.jpg')
width, height = img.size
print("Width:", width, "Height:", height)
# if .jpg file, change to .png
if img.format == 'JPEG':
    img.save('bulldog2.png')

### lexon@3c22fb582218 Module09 % /Library/Frameworks/Python.framework/Versions/3.8/bin/python3 /Users/lexon/Desktop/Homework/CS_160/aws-apprenti-2020/CS160/AlexWilson/Module09/jpg_to_png.py
# Width: 590 Height: 428
# lexon@3c22fb582218 Module09 % 
