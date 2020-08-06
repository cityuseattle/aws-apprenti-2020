-- This will serve as HOP for CS214, which contains 9 exercises:
USE AdventureWorks
GO

-- First: Create Views:

CREATE VIEW HumanResources.EmployeeHireDate 
AS
SELECT p.FirstName, p.LastName, e.HireDate
FROM HumanResources.Employee AS e JOIN Person.Person AS p
ON e.BusinessEntityID = p.BusinessEntityID;

-- Second: Querying the created view

SELECT FirstName, LastName, HireDate
FROM HumanResources.EmployeeHireDate
ORDER BY LastName;

-- Third: modify data through a view and to update table data through a view

UPDATE HumanResources.vEmployeeDepartmentHistory
SET StartDate = '20110203', EndDate = GETDATE()
WHERE LastName = N'Smith' AND FirstName = 'Samantha';

-- Fourth: modify data through a view and to insert table data through a view

INSERT INTO HumanResources.vEmployeeDepartmentHistory(Department, GroupName)
VALUES ('MyDepartment', 'MyGroup');

-- Fifth: analytic function with FIRST_VALUE

SELECT Name, ListPrice,
FIRST_VALUE(Name) OVER (ORDER BY ListPrice ASC) AS
LeastExpensive
FROM Production.Product
WHERE ProductSubcategoryID = 37;

-- sixth: analytic function with LAST_VALUE

SELECT Department, LastName, Rate, HireDate, LAST_VALUE(HireDate)
OVER (PARTITION BY Department ORDER BY Rate) AS LastValue
FROM HumanResources.vEmployeeDepartmentHistory AS edh
INNER JOIN HumanResources.EmployeePayHistory AS eph
ON eph.BusinessEntityID = edh.BusinessEntityID
INNER JOIN HumanResources.Employee AS e
ON e.BusinessEntityID = edh.BusinessEntityID
WHERE Department IN (N'Information Services', N'Document Control');

-- seventh: analytic function with percent_rank

SELECT Department, LastName, Rate,
CUME_DIST () OVER (PARTITION BY Department ORDER BY Rate) AS CumeDist,
PERCENT_RANK() OVER (PARTITION BY Department ORDER BY Rate) AS PctRank
FROM HumanResources.vEmployeeDepartmentHistory AS edh
INNER JOIN HumanResources.EmployeePayHistory AS e
ON e.BusinessEntityID = edh.BusinessEntityID
WHERE Department IN (N'Information Services', N'Document Control')
ORDER BY Department, Rate DESC;

-- eighth: ranking function with RANK

SELECT i.ProductID, p.Name, i.LocationID, i.Quantity, RANK() OVER
(PARTITION BY i.LocationID ORDER BY i.Quantity DESC) AS 
Rank
FROM Production.ProductInventory AS i
INNER JOIN Production.Product AS p
ON i.ProductID = p.ProductID
WHERE i.LocationID BETWEEN 3 AND 4
ORDER BY i.LocationID;

-- ninth: string function with REVERSE

SELECT FirstName, REVERSE(FirstName) AS Reverse
FROM Person.Person
WHERE BusinessEntityID < 5
ORDER BY FirstName;


