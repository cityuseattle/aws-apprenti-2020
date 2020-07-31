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
// const addReview = function(req, res) {
//     res.render('location-review-form', { title: 'Review Starcups on Loc8r', pageHeader: { title: 'Review Starcups' }
//     });
// };
const addReview = function(req, res){
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