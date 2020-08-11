from selenium import webdriver
browser = webdriver.Chrome()
browser.get("hhtps://accounts.google.com/signup")
# find input id="firstName" and fill "Thomas" as firstname
firstname = browser.find_element_by_id('firstName')
firstname.send_keys ('Thomas')
# find input id="lastname" and fill "Anderson" as lastname
lastname = browser.find_element_by_id("lastName")
lastname.send_keys ('Anderson')
# find input id="firstName" and fill "Neo" as firstname
firstname = browser.find_element_by_id('firstName')
firstname.send_keys ('Neo')
# find input name="Passwd" and fill "noPassword"
passwd = browser.find_element_by_name("Passwd")
passwd.send_keys ('noPassword')
# find input name="ConfirmPasswd" and fill "noPassword" in a confirm box
passwd = browser.find_element_by_name("ConfirmPasswd")
passwd.send_keys ('noPassword')