/* This get homepage controller */
// 1. create an index function 
// 2. Include controller code for the homepage 

const about = (req, res) => {
    res.render('generic-text', {
        title: 'About Loc8r ',
        content: 'This is the about page.'});
};

//3. Expose the index function as a method. 
module.exports = {
    about
};