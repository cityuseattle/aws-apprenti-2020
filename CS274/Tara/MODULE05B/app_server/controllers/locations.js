/* GET 'home' page */
const homelist =(req, res)=> {
    res.render('locations-list', { title: 'Home'});
};
/* GET 'Location info' page */
const locationInfo =(req, res)=> {
    res.render('locations-info', { title: 'Location info'});
};
/* GET 'Add review' page */
const addReview =function(req, res) {
    res.render('location-review-form', { 
        title: 'Review Starcups on Loc8r',
    pageHeader: {title: 'Review Starcups'}
});
};
// this module is exported to router
module.exports= {
    homelist, 
    locationInfo,
    addReview
};