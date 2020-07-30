/* GET homepage controller */
// 1. Create an index function. 
// 2. Include controller code for the homepage. 

/*GET 'about/ page*/
const about = (req, res) => {
    res.render('index', { title: 'About' });
};

// 3. Expose the index function as a method.
module.exports = {
    about
};