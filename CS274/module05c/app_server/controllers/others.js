const about = (req, res) => {
	res.render('generic-text', { 
		title: 'About Loc8r',
		content : 'Loc8r was created to help people, this is a project with some sample text here! \nhere are some new line delims \nheres another! \n\n\n\n whoo im down here now' 
	});
};
module.exports = {
	about
};