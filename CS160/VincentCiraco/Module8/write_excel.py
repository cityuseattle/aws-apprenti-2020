import openpxyl

wb = openpyxl.Workbook()
sheet = wb.active
sheet.title = "Cars"
sheet['A1']= "Models"
sheet['B1']= "Price"

cars = [('BMW', 40000), ('Audi', 50000), ('Ford', 25000), ('McLaren', 1800000), ('Toyota', 30000)]
wb.save("car_data.xlsx")