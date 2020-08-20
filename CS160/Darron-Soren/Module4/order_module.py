def order ( number, *lists):
    print (f"\n Number of dishes: {number}, The dishes are: ")
    for list in lists:
        print(f"- {list}")
        