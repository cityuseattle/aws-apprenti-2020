/* GET 'home' page */
const homelist = (req, res) => {
  res.render('location-list',
    {
      title: 'Loc8r - find a place to work with wifi',
      url: `${req.url}`,
      pageHeader: {
        title: 'Loc8r',
        strapLine: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [{
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
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
      }]
    });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', {
    title: 'Starcups',
    url: `${req.url}`,
    pageHeader: {
      title: 'Loc8r',
    },
    sidebar: {
      context: 'because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      img: {src:"https://images.unsplash.com/photo-1468730533502-216da872eab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200", alt:"Responsive image"},
      openingTimes: [{
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
      }],
      reviews: [{
        author: 'Simon Holmes',
        rating: 3,
        timestamp: '16 February 2017',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      },{
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '14 February 2017',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }}
);};


/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Review Starcups on Loc8r',
    url: `${req.url}`,
    pageHeader: { title: 'Review Starcups' }
  });
};

  // 3. Expose the index function as a method.
module.exports = {
  homelist,
  locationInfo,
  addReview
};