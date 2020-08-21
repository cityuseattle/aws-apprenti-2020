/* This get homepage controller */
// 1. create an index function 
// 2. Include controller code for the homepage 

const about = (req, res) => {
    res.render('index', {title: 'About'});
};

//3. Expose the index function as a method. 
module.exports = {
    about
};