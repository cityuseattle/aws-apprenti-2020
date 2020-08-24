const homelist = (req, res) => {
    res.render('locations-list', { 
                title: 'Home',
                pageHeader: {
                title: 'Loc8r', 
                strapLine: 'Find places to work with wifi near you!'
            },
            sidebar: "Loc8r helps you find places to work with when out and about",
            locations: [{                                         
                name: 'Starcups',
                address: '125 Ward Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            },{
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },{
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }]  });

};  


const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('locations-review-form', { title: 'Review Starcups on Loc8r' ,
    pageHeader: { title: 'Review Starcups' }
  }
  );
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};