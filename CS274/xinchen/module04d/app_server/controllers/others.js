const about = (req,res)=>{
    res.render('generic-text',{title: 'about'});
};

module.exports = {
    about
}