function home(req, res, next){

	var title = req.query.name;

	res.render('home', {
		title: 'Hello '+title
	});

}

//--

module.exports.home = home;
