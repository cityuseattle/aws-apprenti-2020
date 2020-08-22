const about = (req,res)=>{
    res.render('index',{title: 'about'});
};

module.exports = {
    about
}