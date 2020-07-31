// GET 'about' page

const about = (req, res) => {
    res.render('generic-text', { 
        title: 'About - Chapter 4',
        content: "Loc8r was created to help people find places to sit down and get a bit of work don3e.\n\n This would normally be a really good idea for a website or webapp....if we lived in the 90's.\n\n And g**gle maps didn't already exist"
        
    });
};

// 3. Expose the index function as a method
module.exports = {
    about
};

