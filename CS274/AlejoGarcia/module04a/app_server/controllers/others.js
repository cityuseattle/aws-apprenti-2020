/* GIT homepage controller */
// 1. Create an index functino.
// 2. Inlcude controller code for the homepage.
const about = (req, res) => {
    res.render('index', {title: 'About'});
};

// 3. Expose the undex function as a method
module.exports = {
    about
};