const homelist = (req, res) => {
	res.render('locations-list', { 
		title: 'Home',
		pageHeader: {
			title: 'Test - Loc8r',
			strapline: 'Find places to work with WiFi near you!'
		},
		sidebar: "Loc8r helps you find places to work when out and about",
		locations: [
			{
				name: 'snoopedogstavern',
				address: '420 st',
				rating: 3,
				facilities: ['hot tea', 'covfefe'],
				distance: 'like kinda close'
			},
			{
				name: 'nope',
				address: 'no location avail',
				rating: 1,
				facilities: ['toilet and sink', 'no one there to serve you its empty'],
				distance: '999 Gallons'
			},
			{
				name: 'swoop',
				address: '3456789 place st drive',
				rating: 1,
				facilities: ['yes', 'but also no'],
				distance: '-900ft'
			}]
	});
};
const locationInfo = (req, res) => {
	res.render('location-info', { title: 'Location Info'});
};
const addReview = (req, res) => {
	res.render('location-review-form', { 
		title: 'Review StarCups on Loc8r',
		pageHeader: { title: 'Review StarCups'}
	});
};

module.exports = {
	homelist,
	locationInfo,
	addReview
};