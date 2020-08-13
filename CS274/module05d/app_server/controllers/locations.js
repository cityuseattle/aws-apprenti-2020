/* Get 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home',
      pageHeader: {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
      },
      sidebar: "Loc8r helps you find places to work when out and about.",
      locations: [{
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
        distance: '100m'
      },{
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
        distance: '200m'
      },{
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium WiFi'],
        distance: '250m'
      }]
    });
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