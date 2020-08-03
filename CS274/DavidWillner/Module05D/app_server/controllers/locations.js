const homelist = (req, res)=> {res.render('locations-list', { 
    pageHeader:{
    title: 'Home',
    strapline: 'Find - places to work with wifi near you!' 
    },
    sidebar: "Loc8r helps you find places to work when out and about.",
    locations:[{
        name: 'Starcups',
        address: '125 High street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
    },
{
    name: 'Cafe Hero',
    address: '125 High street, Reading, RG6 1PS',
    rating: 4,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '200m'
},
{
    name: 'Burger Queen',
    address: '125 High street, Reading, RG6 1PS',
    rating: 2,
    facilities: ['Food', 'Premium wifi'],
    distance: '250m'
}]
});
};

const locationInfo = (req, res) => {
    res.render('location-info',{
       
        title: 'Location Info',
        pageHeader: {title: 'Starcups'},
        sidebar: { 
            context:"is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location:{
            name: "Starcups",
            address: "125 High Street, Reading, RG6 1PS",
            rating: 3,
            facilites: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            locationMap: 'https://picsum.photos/300/300',
            openingTimes: [{
                days: 'Moanday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false},
                {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },{
                    days: 'Sunday',
                    closed: true
            }],
            reviews:[{
                author:'Simon Holmes',
                rating: 5,
                timestamp:'16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            },{
                author: 'Charlie Chaplin',
                rating:3,
                timestamp: '16 June 2013',
                reviewText:'It was okay. Coffee wasn\'t great, but they were fast.'
            }]
        }
    });
};

const addReview = (req, res) => {
    res.render('location-review-form', {
        title: "Review Starcups on Loc8r",
        pageHeader: {title: 'Review Starcups'}

    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};