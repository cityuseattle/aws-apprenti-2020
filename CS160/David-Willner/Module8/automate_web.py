from selenium import webdriver

browser = webdriver.Chrome('Users\David Willner\Desktop\chromedriver')
browser.get("https://accounts.google.com/signup")

firstname = browser.find_element_by_id('firstName')
firstname.send_keys('Thomas')

lastname = browser.find_element_by_id("lastName")
lastname.send_keys('Anderson')

username = browser.find_element_by_name("passwd")
passwd.send_keys('noPassword')

passwd = browser.find_element_by_name('ConfirmPasswd')
passwd.send_keys('noPassword')

