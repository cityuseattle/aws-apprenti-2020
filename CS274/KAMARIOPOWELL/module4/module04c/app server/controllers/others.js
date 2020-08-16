/* GET 'about' page */
const about = (req, res) => {
    res.render('generic-text', {title: 'About - Chapter 4' });
};
module.exports = {
    about
};
