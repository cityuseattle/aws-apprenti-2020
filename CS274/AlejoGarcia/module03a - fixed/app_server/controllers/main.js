/* GIT homepage controller */
// 1. Create an index functino.
// 2. Inlcude controller code for the homepage.
const index = (req, res) => {
    res.render('index', {title: 'Express - Chapter 3'});
};

// 3. Expose the undex function as a method
module.exports = {
    index
};