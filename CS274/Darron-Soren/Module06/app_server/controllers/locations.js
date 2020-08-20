const homelist = (req, res) => {
  res.render('locations-list', { 
    pageHeader: {title: 'Loc8r', strapLine: 'Find places to work with wifi near you!'}, 
    sidebar: "Looking for wifi and a seat?",
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

  
  /* GET 'Location info' page */
  const locationInfo = (req, res) => {
    res.render('location-info', 
    { 
    pageHeader: {
     title: 'Starcups',
   },
   sidebar: {
     context: 'Starcups',
     callToAction: 'please leave a review.'
   },
   location: {
     name: 'Starcups',
     address: '125 High Street, Reading, RG6 1PS',
     rating: 3,
     facilities: ['Hot drinks', 'Food', 'Premium wifi'],
     coords: {lat: 51.455041, lng: -0.9690884},
     openingTimes: [
       {
         days: 'Monday - Friday',
         opening: '7:00am',
         closing: '7:00pm',
         closed: false
       },
       {
         days: 'Saturday',
         opening: '8:00am',
         closing: '5:00pm',
         closed: false
       },
       {
         days: 'Sunday',
         closed: true
       }
     ],
     reviews: [
       {
         author: 'Simon Holmes',
         rating: 5,
         timestamp: ' 16 July 2013',
         reviewText: 'What a great place. I can\'t say enough good things about it.'
       },
       {
         author: 'Charlie Chaplin',
         rating: 3,
         timestamp: ' 16 June 2013',
         reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast'
       }
     ]
   }
 }
);
};  
  
  
  /* GET 'Add review' page */
  const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Review Starcups on Loc8r' ,
    pageHeader: { title: 'Review Starcups' }
  }
);
  };
  
  module.exports = {
    homelist,
    locationInfo,
    addReview
  };



