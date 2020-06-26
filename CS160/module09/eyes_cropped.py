from PIL import image
img=Image.open('bulldog2.png')
cropped=img.crop((0,150,290,235))
cropped.save('eyes_cropped.png')

copy_img=img.copy()
copy_img.paste(cropped,(0,0))
copy_img.save('four_eyed_bulldog.png')