// Get homepage //
const homelist = (req, res) => {
    res.render('locations-list', {title: 'Home' });
};

// Get 'Locations Info' page //
const LocationInfo = (req, res) => {
    res.render('location-info', {title: 'Locations'});
};

// Get add review page //
const addReview = function(req, res) {
    res.render ('location-review-form', {
        title: 'Review Starcups on Loc8r', pageHeader:{ title: 'Review Starcups'}
    });
};

module.exports = {
    homelist,
    LocationInfo,
    addReview
};