module.exports = function(app){

	var controller = app.controllers.serie;

	app.get('/series', controller.listarSeries);
	app.get('/series/:id', controller.obterSerie);
	app.get('/series/nome/:nome', controller.obterNome);
};