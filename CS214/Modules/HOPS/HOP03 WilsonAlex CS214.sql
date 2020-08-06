-- HOP3

-- First Exercise: Simple SELECT Statement using JOINS

SELECT ProductID, Purchasing.Vendor.BusinessEntityID,
Name
FROM Purchasing.ProductVendor JOIN Purchasing.Vendor
ON (Purchasing.ProductVendor.BusinessEntityID = Purchasing.Vendor.BusinessEntityID)
WHERE StandardPrice > $10
AND Name LIKE N'F%'
GO



-- Second Exercise: SELECT statement using JOINS with improved readability on query

SELECT pv.ProductID, v.BusinessEntityID, v.Name
FROM Purchasing.ProductVendor AS pv
JOIN Purchasing.Vendor AS v
ON (pv.BusinessEntityID = v.BusinessEntityID)
WHERE StandardPrice > $10
AND Name LIKE N'F%';

-- Third Exercise: SELECT statement using JOIN condition in the WHERE clause

SELECT pv.ProductID, v.BusinessEntityID, v.Name
FROM Purchasing.ProductVendor AS pv, Purchasing.Vendor AS v
WHERE pv.BusinessEntityID=v.BusinessEntityID
AND StandardPrice > $10
AND Name LIKE N'F%';


-- Fourth Exercise: Subqueries

SELECT Ord.SalesOrderID, Ord.OrderDate,
(SELECT MAX(OrdDet.UnitPrice)
FROM Sales.SalesOrderDetail AS OrdDet
WHERE Ord.SalesOrderID = OrdDet.SalesOrderID) AS MaxUnitPrice
FROM Sales.SalesOrderHeader AS Ord;


-- Fifth Exercise: Subquery SELECT and a join SELECT part 1

/* SELECT statement built using a subquery. */
SELECT Name
FROM Production.Product
WHERE ListPrice =
(SELECT ListPrice
FROM Production.Product
WHERE Name = 'Chainring Bolts');

-- Sixth Exercise: Subquery SELECT and a join SELECT part 2

SELECT Prd1. Name
FROM Production.Product AS Prd1
JOIN Production.Product AS Prd2
ON (Prd1.ListPrice = Prd2.ListPrice)
WHERE Prd2. Name = 'Chainring Bolts';

-- Seventh Exercise: Qualifying column names in Subqueries

SELECT Name
FROM Sales.Store
WHERE BusinessEntityID NOT IN(SELECT CustomerID
FROM Sales.Customer
WHERE TerritoryID = 5);

-- Eighth Exercise: Qualifying column names in Subqueries with the implicit assumptions

SELECT Name
FROM Sales.Store
WHERE Sales.Store.BusinessEntityID NOT IN
(SELECT Sales.Customer.CustomerID
FROM Sales.Customer
WHERE TerritoryID = 5)

-- Ninth Exercise: Correlated subqueries

SELECT DISTINCT c.LastName, C.FirstName,
e.BusinessEntityID
FROM Person.Person AS c JOIN HumanResources.Employee AS e
ON e.BusinessEntityID = c.BusinessEntityID
WHERE 5000.00 IN
(SELECT Bonus
FROM Sales.SalesPerson sp
WHERE e.BusinessEntityID = sp.BusinessEntityID);