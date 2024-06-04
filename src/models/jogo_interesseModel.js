var database = require("../database/config");



function inserirjogos(id,fkjogo,nivel) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel) values  (${id} , ${fkjogo}, ${nivel})`;

  return database.executar(instrucaoSql);
}

function inserirpontosValorant(id,nivelvalorant) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel) values  (${id} , 3 , ${nivelvalorant})`;

  return database.executar(instrucaoSql);
}

function verjogos() {
  var instrucaoSql = `SELECT * FROM jogo_interesse`;

  return database.executar(instrucaoSql);
}


module.exports = { inserirjogos, inserirpontosValorant,verjogos };
    