/*get hopme page*/ 
const homelist = (req, res) => {
    res.render('locations-list',{title: 'Home'});
};

/*gte location info page */ 
const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

const addReview = (req, res) => {
    res.render('location-review-form', {title: 'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};