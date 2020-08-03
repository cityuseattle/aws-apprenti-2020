/* GET about page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About- Chapter 4' });
  };
  
  // 3. Expose the index function as a method.
  module.exports = {
    about
  };