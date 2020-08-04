/*get hopme page*/ 
const homelist = (req, res) => {
    res.render('index',{title: 'Home'});
};

/*gte location info page */ 
const locationInfo = (req,res) => {
    res.render('index', {title: 'Location info'});
};

const addReview = (req,res) => {
    res.render('index', {title: 'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};