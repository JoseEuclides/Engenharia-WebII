// /models/produto.js
var mongoose = require('mongoose');

module.exports = function () {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      require: true
    },
    preco: {
      type: Number,
      require: true
    },raca:{
      type: String,
      require: true
    }
  });

  return mongoose.model('Produto', schema);
};

