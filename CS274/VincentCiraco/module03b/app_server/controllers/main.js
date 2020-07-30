const index = (res,req) => {
    res.render('index', {title: 'Express - Chapter 3'});

};
module.exports = {
    index
};