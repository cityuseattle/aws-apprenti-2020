const index = (req, res) => {
    res.render('index', { title: 'Express - Chapter 3' });
};

module.exports = {
    index
};