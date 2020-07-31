// GET 'home' page

const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};

// GET 'Location info' page
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
};

// GET 'review' page
const addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r', 
        pageHeader: { title: 'Review Starcups' }
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};

