// 1. Create an index function.
// 2. Include controller code for the homepage.

/* Get 'about' page*/
const about = (req, res) => {      
    res.render('generic-text', { title: 'About - Chapter 4'});
};

// 3. Expose the index function as a method.
module.exports = {
    about
};