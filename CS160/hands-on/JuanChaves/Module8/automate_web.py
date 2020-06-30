'''
Known problems with installing geckodriver 0.26.0 through GitHub

    macOS 10.15 (Catalina):

    Due to the recent requirement from Apple that all programs must
    be notarized, geckodriver will not work on Catalina if you manually
    download it through another notarized program, such as Firefox.

    Whilst we are working on a repackaging fix for this problem, you
    can find more details on how to work around this issue in the
    macOS notarization section of the documentation.

Mozilla considers this a known bug with the geckodriver 0.26.0 release:
    https://firefox-source-docs.mozilla.org/testing/geckodriver/Notarization.html

    Arbitrary software downloaded through other means, such as curl(1) is not affected by this change.

    curl https://github.com/mozilla/geckodriver/releases/download/v0.26.0/geckodriver-v0.26.0-macos.tar.gz

    or SO workaround:
    https://stackoverflow.com/questions/41190989/how-do-i-install-geckodriver

***Solutions for macOS Catalina 15.5 with Firefox 77.0.1***

1.
    #Install webdrivermanager with pip

        pip3 install webdrivermanager

    #Install the driver for Firefox and Chrome

        webdrivermanager firefox chrome --linkpath /usr/local/bin

    #Or install the driver only for Firefox

        webdrivermanager firefox --linkpath /usr/local/bin

    #Or install the driver only for Chrome

        webdrivermanager chrome --linkpath /usr/local/bin

2.
    # universally install geckodriver
    brew install geckodriver

'''

from selenium import webdriver

browser = webdriver.Firefox()
browser.get("https://accounts.google.com/signup")
# find input id="firstName" and fill "Thomas" as firstname 
firstname = browser.find_element_by_id('firstName')
firstname.send_keys('Thomas')
# find input id="lastName" and fill "Anderson" as lastname
lastname = browser.find_element_by_id('lastName')
lastname.send_keys('Anderson')
# find input id="username" and fill "Neo" as username
username = browser.find_element_by_id('username')
username.send_keys('Neo')
# find input name="Passwd" and fill "noPassword"
passwd = browser.find_element_by_name('Passwd')
passwd.send_keys('noPassword')
# find input name="ConfirmPasswd" and fill "noPassword" in a confirm box
passwd = browser.find_element_by_name('ConfirmPasswd')
passwd.send_keys('noPassword')