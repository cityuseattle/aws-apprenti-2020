
const about = function(req, res){
  res.render('generic-text', {
    title: 'About Loc8tr',
    content: 'Loc8r was created to help people find places to sit down\
    and get a bit of work done.\n\nLorem ipsum dolor sit\
    amet, consectetur adipiscing elit. Nunc sed lorem ac nisi digni\
    ssim accumsan. Nullam sit amet interdum magna. Morbi quis\
    faucibus nisi. Vestibulum mollis purus quis eros adipiscing\
    tristique. Proin posuere semper tellus, id placerat augue dapibus\
    ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum\
    dui. Pellentesque sollicitudin volutpat ullamcorper.'
  });
};

// 3. Expose the index function as a method
module.exports = {
  about
};