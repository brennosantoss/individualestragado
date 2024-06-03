var jogo_interessemodel = require("../models/jogo_interesseModel");


function verJogos(req, res) {
    var idUsuario = req.params.idUsuario;
  
    jogo_interessemodel.verjogos(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

  
function inserirjogos(req,res) {
    var fkjogo = req.body.fkjogoServer;
    var nivel = req.body.nivelServer;
     var id = req.body.idServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    jogo_interessemodel.inserirjogos(id,fkjogo, nivel)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    
  }



  module.exports = {
    verJogos,
    inserirjogos
  }