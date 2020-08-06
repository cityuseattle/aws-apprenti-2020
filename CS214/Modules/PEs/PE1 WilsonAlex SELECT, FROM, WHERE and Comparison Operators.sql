/*
This is PE1, wherein we are conducting three seperate queries
*/

-- Query number 1, attempting to return all information from the cd.facilities table.
USE AdventureWorks

SELECT facid, name, membercost, guestcost, initialoutlay, monthlymaintenance;
FROM cd.facilities;

-- or alternately:

SELECT * FROM cd.facilities;

-- Query number 2, attempting to print a list of facilities and their cost to members
-- Printing only a list of facility names and costs

SELECT name, membercost FROM cd.facilities;



-- Query number 3, print a list of only the facilities that charge a fee to their members. 

SELECT facid, name, membercost, guestcost, initialoutlay, monthlmaintenance
FROM cd.facilities;