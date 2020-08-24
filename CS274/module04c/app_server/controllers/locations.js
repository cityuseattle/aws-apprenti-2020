/*GET 'home' page */

const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
};


const locationInfo = (req, res) => {
    res.render('index', {title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('index', { title: 'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};