
const about = function(req, res){
    res.render('generic-text', {
      title: 'About Loc8r',
      content: 'This is the about page.'           
    });
  };


module.exports = {
    about
};
