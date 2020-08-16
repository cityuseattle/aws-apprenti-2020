const homelist = (req, res) => {
    res.render('index', { title: 'Home' });
};

const locationInfo = (req, res) => {
    res.render('index', { title: 'Location info' });
};

const addReview = (req, res) => {
    res.render('index', { title: 'Add review' });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};