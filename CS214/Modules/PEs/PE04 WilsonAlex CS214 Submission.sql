-- This will be submission for PE4 CS214
-- COUNT, GROUP BY, and ORDER BY

-- This PE consists of 1 Exercises:

-- First, output a list of all memebers, including the individual who recommended them (if any)
-- Ensure the results are ordered by (surname, firstname).



SELECT c.firstname, c.surname, rby.firstname, rby.surname
FROM cd.members AS c
SELF JOIN cd.members AS rby
ON c.memid = rby.recommendedby
ORDER BY c.surname, c.firstname;

/*
Note to the grader: the exercise calls for a 'left join and order by', but 
the exercise call for information that was all located on one table, which
I though would call for a self join. 

Otherwise, I thought you needed to have to seperate tables in order to do a
left join query.

Thanks!

-- reference

/*
SELECT column1, column2... 
FROM table_A
LEFT JOIN table_B ON join_condition
WHERE row_condition
*/