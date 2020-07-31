const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
    res.render('locations-info', { title: 'Location info' });
};

const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Review Starcups on loc8r', pageHeader: {title: 'Review Starcups' } });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};