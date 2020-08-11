import pyautogui
import time

screenWidth, screenHeight = pyautogui.size()
currentMouseX, currentMouseY = pyautogui.size()
print("Starting position: " + str(currentMouseX) + ", " + str(currentMouseY))
pyautogui.moveTo(588, 482)
pyautogui.click()
for i in range(10):
    time.sleep(1)
    currentMousex, currentMouseY = pyautogui.position()
    print("New position: " + str(currentMouseX) + ", " + str(currentMouseY))