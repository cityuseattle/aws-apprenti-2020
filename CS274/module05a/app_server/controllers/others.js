// 1. Create an index function.
// 2. Include controller code for the homepage.

/* Get 'about' page*/
const about = (req, res) => {      
    res.render('generic-text', { 
        title: 'About Loc8r', content: 'Loc8r was created to help people find places to sit down and get a bit of work done. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi digni ssim accumsan. Nullan sit amet interdum magna. Morbi quis faucis nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin poseuere semper telllus, id placerat augue dapibus ornare. Aenan leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.'
    });
};

// 3. Expose the index function as a method.
module.exports = {
    about
};