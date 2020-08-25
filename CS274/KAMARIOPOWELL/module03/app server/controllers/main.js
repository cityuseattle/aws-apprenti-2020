/* GET homepage controller */
// 1. Create an index function.
// 2. Include controller code for the homepage.
const index = (req, res) => {
  res.render('index', { title: 'Express - Chapter 3' });
};

// 3 Expose the index function as a method.
module.exports = {
 index
};
