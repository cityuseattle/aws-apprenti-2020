/*GET 'home' page */

const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};


const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('locations-review-form', { title: 'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};