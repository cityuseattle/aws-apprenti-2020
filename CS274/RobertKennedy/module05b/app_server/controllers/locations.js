const homelist = (req, res)=> {res.render('locations-list', { title: 'Home' });
};

const locationInfo = (req, res) => {
    res.render('location-info',{title: 'Location Info'});
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