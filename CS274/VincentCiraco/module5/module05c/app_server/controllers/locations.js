/* GET 'home' page */
const homelist =(req, res)=> {
    res.render('locations-list', { 
        title: 'Home',
        pageHeader : {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Loc8r helps you find places to work when out and about.",
        locations: [{
            name:           'Starcups',
            address:        '125 High Street, Reading, RG6 1PS',
            rating:        3,
            facilities:     ['Hot drinks', 'Food', 'Premium wifi'],
            distance:       '100m'
        },{
            name:           'Cafe Hero',
            address:        '125 High Street, Reading, RG6 1PS',
            rating:        4,
            facilities:     ['Hot drinks', 'Food', 'Premium wifi'],
            distance:       '200m'

        },{
            name:           'Burger Queen',
            address:        '125 High Street, Reading, RG6 1PS',
            rating:        2,
            facilities:     ['Food', 'Premium wifi'],
            distance:       '150m'
        }]
    });
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