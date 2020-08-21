// Get homepage //
const homelist = (req, res) => {
    res.render('index', {title: 'Home' });
};

// Get 'Locations Info' page //
const LocationInfo = (req, res) => {
    res.render('index', {title: 'Locations'});
};

// Get add review page //
const addReview = (req, res) => {
    res.render ('index', {title: 'Add Review'});
};

module.exports = {
    homelist,
    LocationInfo,
    addReview
};