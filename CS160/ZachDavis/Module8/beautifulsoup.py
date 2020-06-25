import bs4
import requests

file = open("example.html")
lsoup = bs4.BeautifulSoup(file.read(), "html.parser")
elem=lsoup.select("#author")
print(elem[0].get_text())