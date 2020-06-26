import requests

res = requests.get ('http://web.textfiles.com/computers/3dbasics.txt')

try:
    res.raise_for_status()          # returns HTTP error object if any error occurs 
    print ("Status Code:", res.status_code)     # indicate status, ex 404 not found 
    print("Length of the text:", len(res.text))
    print(res.text[:103])
except Exception as exc:
    print ("Oh no: %s " %(exc))