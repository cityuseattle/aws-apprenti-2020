Res= requests.get("http://www.cs.cmu.edu/~pausch/") 

# used for display error message if url not valid 

Res.raise_for_status() 
soup= bs4.BeautifulSoup(res.text,"html.Parser") 
# store list of all <h1> tags to element 
element=soup.select("h1") 
for item in element: 
    print(item) 
    print(item.get_text()) 
    print() 