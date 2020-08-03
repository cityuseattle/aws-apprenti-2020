

const about = (req, res) => {
    res.render('generic-text', {title: 'About'});
};

// 3. Expose the undex function as a method
module.exports = {
    about
};