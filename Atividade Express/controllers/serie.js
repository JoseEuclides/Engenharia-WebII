var series = [
  {
  	_id: 1, nome: 'Serie1A'
  	
  },
  {
  	_id: 2, nome: 'Serie1B'
  	
  },
  {
  	_id: 3, nome: 'Seria2A'
  	
  },
  {
  	_id: 4, nome: 'Seriw2B'
  	
  },
  {
  	_id: 5, nome: 'Serie3A'
  	
  },
  {
  	_id: 6, nome: 'Serie3B'
  	
  }
];

module.exports = function(app){
	var controller = {};
  
	controller.listarSeries = function(req, res){
		res.json(series);
	};

	controller.Serie = function(req, res){
		var idSerie = req.params.id;
		var serie = series.filter(function(serie){
			return serie._id == idSerie;
		})[0];
		serie ?
		res.json(serie) :
		res.status(404).send('Série não encontrada');

	};

  controller.Nome = function(req, res){
    var nome = req.params.nome;
    var serie = series.filter(function(serie){
      return serie.nome == nome;
    })[0];
    serie ?
    res.json(serie) :
    res.status(404).send('Nome não encontrado');

  };
	return controller;
}