##### search_map.py

# import webbrowser
# import sys

# place='city university of seattle'
# if len(sys.argv)>1:
#     #Get address from command line
#     place=''.join(sys.argv[1:])

# webbrowser.open("https://google.com/maps/search/"+place)

########### Requests

# import requests

# res= requests.get('http://web.textfiles.com/computers/3dbasics.txt')

# try:
#     res.raise_for_status()
#     print("Status Code:", res.status_code)
#     print("Length of the text:", len(res.text))
#     print(res.text[:103])
# except Exception as exc:
#     print("Oh no: %s" %(exc))


######## Parsing HTML with BeautifulSoup
# Example.html

# import bs4 
# import requests 

# file = open("/Users/lexon/Desktop/Homework/CS_160/aws-apprenti-2020/CS160/AlexWilson/Module08/example.html")
# lsoup = bs4.BeautifulSoup(file.read(), "html.parser")
# elem=lsoup.select("#author")
# print(elem[0].get_text())

# res = requests.get("http://www.cs.cmu.edu/~pausch/")
# # used for display error message if url not valid
# res.raise_for_status()
# soup= bs4.BeautifulSoup(res.text, "html.parser")
# # store list of all <h1> tags to element
# element=soup.select("h1")
# for item in element:
#     print(item)
#     print(item.get_text())
#     print()

#### automate_web.py

from selenium import webdriver

browser = webdriver.Chrome()
browser.get("https://accounts.google.com/signup")
# find input id="firstName" and fill 'Thomas" as First name
firstname = browser.find_element_by_id('firstName')
firstname.send_keys ('Thomas')
# find input id="lasName" and fill "Anderson" as lastname
lastname = browser.find_element_by_id("lastName")
lastname.send_keys ('Anderson')
# find input id="username" and fill "Neo" as username
username = browser.find_element_by_id('username')
username.send_keys ('Neo')
# find input name="Passwd" and fill "noPassword"
passwd = browser.find_element_by_name("Passwd")
passwd.send_keys ('noPassword')
# find input name_"ConfirmPasswd" and fill "noPassword" in a confirm box
passwd = browser.find_element_by_name('ConfirmPasswd')
passwd.send_keys ('noPassword')

### ......that was awesome. 

##### read_excel.py

# import openpyxl

# wb = openpyxl.load_workbook('example.xlsx')
# print (wb.sheetnames)
# # wb.active selects the first available sheet (sheet 2)
# sheet = wb.active
# print (sheet.title)
# for i in range(1, sheet.max_row+1):
#     # print all data in column A,B,C
#     # ljust() is used to make it easier to read
#     print(i, str(sheet.cell(row=i, column=1).value).ljust(25, ' '),
#     sheet.cell(row=i, column=2).value.ljust(15, ' '),
#     str(sheet.cell(row-i, column=3).value))

###### IMPORTANT NOTE:.....I could not find the spread sheet referenced in the word doc
######                          therefore the code did not work. But it made sense. 




