#### install PIP
# pip3 install Pillow
# lexon@3c22fb582218 Module09 % pip3 install Pillow
# Collecting Pillow
#   Downloading Pillow-7.1.2-cp38-cp38-macosx_10_10_x86_64.whl (2.2 MB)
#      |████████████████████████████████| 2.2 MB 1.1 MB/s 
# Installing collected packages: Pillow
# Successfully installed Pillow-7.1.2
# lexon@3c22fb582218 Module09 % python3
# Python 3.8.3 (v3.8.3:6f8c8320e9, May 13 2020, 16:29:34) 
# [Clang 6.0 (clang-600.0.57)] on darwin
# Type "help", "copyright", "credits" or "license" for more information.
# >>> from PIL import ImageColor
# >>> ImageColor.getcolor("red", "RGBA")
# (255, 0, 0, 255)
# >>> ImageColor.getcolor("Blue", "RGBA")
# (0, 0, 255, 255)
# >>> ImageColor.getcolor("darkblue", "RGBA")
# (0, 0, 139, 255)
# >>> ImageColor.getcolor("chocolate","RGBA")
# (210, 105, 30, 255)
# >>> exit
# Use exit() or Ctrl-D (i.e. EOF) to exit
# >>> exit()
# lexon@3c22fb582218 Module09 % 

# from PIL import Image

# def multi_face():
#     # resize
#     img = Image.open('bulldog2.png')
#     width, height = img.size
#     resize = img.resize((int(width//4), int(height//4)))
#     #flip image from left to right like mirror
#     flip = resize.transpose(Image.FLIP_LEFT_RIGHT)
#     fwidth, fheight = flip.size

#     # add small flipped images into pattern
#     pattern = Image.new('RGBA', (590, 428), 'green')
#     # image grid 4x4
#     w, h, = pattern.size
#     for left in range(0, w, fwidth):
#         for top in range(0, h, fheight):
#             pattern.paste(flip, (left, top))
#     pattern.save('multi_face.png')

# if __name__ == "__main__":
#     multi_face()

# from PIL import Image

# img = Image.open('bulldog2.png')
# # eyes captured from this pixels
# cropped = img.crop((0, 150, 590, 235)) # position of the eyes
# cropped.save('eyes_cropped.png')
# # paste eye cropped into the copied bulldog2.jpg
# copt_img = img.copy()
# copt_img.paste(cropped, (0,0)) # paste it at position 0,0 or top left
# copt_img.save('four_eyes_bulldog.png')

# from PIL import Image, ImageFilter

# # blur image
# img = Image.open('bulldog2.png')
# im_blurred = img.filter(filter=ImageFilter.BLUR)
# im_blurred.save('blur.jpg')

# #grayscale
# img_gray = img.convert('L')
# img_gray.save('grayscale.png')


#### This was supposed to find my screen's size in pixels, but it did not...I'm not sure why
# import pyautogui

# pyautogui.size(), displays cursor position in real time. Brilliant.

# import pyautogui

# print('Press control + C to terminate')
# try:
#     while True:
#         x, y = pyautogui.position()
#         positionStr = 'X: ' + str(x) + ' Y: ' + str(y)
#         print(positionStr, end='\r')
# except KeyboardInterrupt:
#     print('\nDone')

##### find_position1.py, 

# import pyautogui
# import time

# screenWidth, screenHeight = pyautogui.size()
# currentMouseX, currentMouseY = pyautogui.position()
# print("Starting position " + str(currentMouseX) + ", " + str(currentMouseY))
# pyautogui.moveTo(588, 482)
# pyautogui.click()
# for i in range(10):
#     time.sleep(1)
#     curentMouseX, currentMouseY = pyautogui.position()
#     print("Newposition: " + str(currentMouseX) + "x " + str(currentMouseY))

