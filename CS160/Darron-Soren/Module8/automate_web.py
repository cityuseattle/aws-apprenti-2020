from selenium import webdriver

browser = webdriver.Chrome()
browser.get ( "https://accounts.google.com/signup")

firstname = browser.find_element_by_id ( 'firstName')
firstname.send_keys ( 'Thomas' )

lastname = browser.find_element_by_id ( 'lastName')
lastname.send_keys ( 'Anderson' )

username = browser.find_element_by_id ( 'username' )
username.send_keys ( 'Neo' )

passwd = browser.find_element_by_id ( 'Passwd' )
passwd.send_keys ( 'noPassword' )

passwd = browser.find_element_by_id ( 'ConfirmPasswd' )
passwd.send_keys ( 'noPassword' )
