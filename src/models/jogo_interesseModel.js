var database = require("../database/config");



function inserirjogos(id,nivel) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel) values  (${id} , 1, ${nivel})`;

  return database.executar(instrucaoSql);
}

function inserirpontosValorant(id,nivelvalorant) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel) values  (${id} , 3 , ${nivelvalorant})`;

  return database.executar(instrucaoSql);
}

function inserirpontoslol(id,nivellol) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel) values  (${id} , 3 , ${nivellol})`;

  return database.executar(instrucaoSql);
}

function verjogos() {
  var instrucaoSql = `SELECT * FROM jogo_interesse`;

  return database.executar(instrucaoSql);
}


module.exports = { inserirjogos, inserirpontosValorant,verjogos, inserirpontoslol };
    