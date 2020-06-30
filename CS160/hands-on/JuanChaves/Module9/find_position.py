import pyautogui
# local screen Size(width=1440, height=900)

print('Print control + C to terminate')
try:
    while True:
        x, y = pyautogui.position()
        positionStr = f'X: {str(x)}, Y: {str(y)}'
        print(positionStr, end='\r')
except KeyboardInterrupt:
    print('\nDone')