import pyautogui
import time

screenWidth, screenHeight = pyautogui.size()
currentMouseX, currentMouseY = pyautogui.position()
print("Starting postion: " + str(currentMouseX) + "," + str(currentMouseY))
pyautogui.moveTo (588, 482)
pyautogui.click()
for i in range (10):
    time.sleep(1)
    currentMouseX, currentMouseY = pyautogui.position()
    print ("New postion: " + str (currentMouseX) + "," + str (currentMouseY))
    