/*get hopme page*/ 
const homelist = (req, res) => {
    res.render('locations-list',{title: 'Home'});
};

/*gte location info page */ 
const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

const addReview = (req, res) => {
    res.render('location-review-form', {
        title: 'Review starcups on loc8r',
        pageHeader: {title: 'Review starcups'}
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};