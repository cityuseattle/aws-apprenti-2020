-- this will serve as my submission for HOP5 CS214 which contains 8 exercises:
-- USE AdventureWorks


-- 1. Creating a Stored Procedure:

-- CREATE PROCEDURE HumanResources.uspGetEmployeesTest2
-- @LastName nvarchar(50),
-- @FirstName nvarchar(50)
-- AS

-- SET NOCOUNT ON;
-- SELECT FirstName, LastName, Department
-- FROM HumanResources.vEmployeeDepartmentHistory
-- WHERE FirstName = @FirstName AND LastName = @LastName
-- AND EndDate IS NULL;



-- 2. create and modify a stored procedure part 1

-- CREATE PROCEDURE Purchasing.uspVendorAllInfo
-- WITH EXECUTE AS CALLER
-- AS
-- SET NOCOUNT ON;

-- SELECT v.Name AS Vendor, p.Name AS 'Product name',
-- v.CreditRating AS 'Rating',
-- v.ActiveFlag AS Availability
-- FROM Purchasing.Vendor v
-- INNER JOIN Purchasing.ProductVendor pv
-- ON v.BusinessEntityID = pv.BusinessEntityID
-- INNER JOIN Production.Product p
-- ON pv.ProductID = p.ProductID
-- ORDER BY v.Name ASC;




-- 3. create ad modify a stored procedure part 2


-- ALTER PROCEDURE Purchasing.uspVendorAllInfo
-- @Product varchar(25)
-- AS
-- SET NOCOUNT ON;
-- SELECT LEFT(v.Name, 25) AS Vendor, LEFT(p.Name, 25) AS 'Product name',
-- 'Rating' = CASE v.CreditRating
-- WHEN 1 THEN 'Superior'
-- WHEN 2 THEN 'Excellent'
-- WHEN 3 THEN 'Above average'
-- WHEN 4 THEN 'Average'
-- WHEN 5 THEN 'Below average'
-- ELSE 'No rating'
-- END
-- , Availability = CASE v.ActiveFlag
-- WHEN 1 THEN 'Yes'
-- ELSE 'No'
-- END
-- FROM Purchasing.Vendor AS v
-- INNER JOIN Purchasing.ProductVendor AS pv
-- ON v.BusinessEntityID = pv.BusinessEntityID
-- INNER JOIN Production.Product AS p
-- ON pv.ProductID = p.ProductID
-- WHERE p.Name LIKE @Product
-- ORDER BY v.Name ASC;



-- 4. Executing a Stored Procedure part 1


-- EXEC dbo.uspGetEmployeeManagers @BusinessEntityID = 50;


-- 5. Executing a Stored Procedure part 2


-- EXEC dbo.uspGetEmployeeManagers 6;


-- 6. Rename a Stored procedure part 1


-- CREATE PROCEDURE HumanResources.uspGetAllEmployeesTest
-- AS
-- SET NOCOUNT ON;
-- SELECT LastName, FirstName, Department
-- FROM HumanResources.vEmployeeDepartmentHistory


-- 7. Rename a stored procedure part 2

-- Renmae the stored procedure

-- EXEC sp_rename 'HumanResources.uspGetAllEmployeesTest', 'uspEveryEmployeeTest';

-- 8. Recompile a stored procedure

CREATE PROCEDURE dbo.uspProductByVendor @Name varchar(30) = '%' 
WITH RECOMPILE 
AS 
SET NOCOUNT ON; 
SELECT v.Name AS 'Vendor name', p.Name AS 'Product name' 
FROM Purchasing.Vendor AS v 
JOIN Purchasing.ProductVendor AS pv 
ON v.BusinessEntityID = pv.BusinessEntityID 
JOIN Production.Product AS p 
ON pv.ProductID = p.ProductID 
WHERE v.Name LIKE @Name;


