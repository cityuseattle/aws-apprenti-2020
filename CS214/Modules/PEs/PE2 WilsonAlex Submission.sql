-- This document will be my official submission for PE2

-- Problem 1 would like us to produce a list of all facilities with the word 'Tennis' in their name
-- Give the database example in the problem:
-----------------------------------------------------

SELECT name 
FROM cd.facilities
WHERE
    name LIKE 'Tennis';


-- Problem 2 would like us to retrieve the details of facilities with ID 1 and 5 
-- WITHOUT using the OR operator

SELECT facid 
FROM cd.facilities
WHERE 
    facid = 1 AND facid = 5;
