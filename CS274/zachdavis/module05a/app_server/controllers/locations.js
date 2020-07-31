const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
    res.render('locations-info', { title: 'Location info' });
};

const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};