-- This will be my submission for PE05 of CS214 which consissts of two problems. 


-- The first problem is simply asking us to produce a count of the number of facilities:


SELECT count(*)
FROM cd.facilities;




-- The second problem would like us to produce a list of the total number of slots
-- booked per facility. And to produce an output table consisting of facility id and slotss, sorted by facility id. 


SELECT facid, sum(slots) AS "Total Slots"
	FROM cd.bookings
	GROUP BY facid
ORDER BY facid;  