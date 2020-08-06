-- This will be my submission for PE03 which contains 2 exercises:

-- The first exercise is asking us to produce a list of the start times for bookings by memebers named 'David Farrell'

SELECT cd.bookings.starttime,
FROM cd.bookings, INNER JOIN cd.members,
ON cd.bookings.memid = cd.members.memid
WHERE
cd.members.firstname='David' AND cd.members.surname='Farrell';


-- The second is asking us to produce a list of the start times for bookings for tennis courts, for the date '2012-09-21'
-- It is also asking us to return a list of start time and facility name parings, ordered by the time

SELECT starttime, facid
FROM cd.bookings INNER JOIN cd.facilities
ON cd.bookings.facid = cd.facilities.facid
WHERE cd.bookings.starttime = 2012-09-21%

ORDER BY cd.bookings.starttime ASC;

