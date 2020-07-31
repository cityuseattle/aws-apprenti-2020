/* Get 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home'});
};

/* Get 'Location info' page */
// const locationInfo = (req, res) => {
//     res.render('index', { title: 'Location info'});
// };
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info'});
};

/* Get 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};