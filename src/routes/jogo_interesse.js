var express = require("express");
var router = express.Router();

var jogo_interesseController = require("../controllers/jogo_interesseController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirjogos", function (req, res) {
    jogo_interesseController.inserirjogos(req, res);
})

router.post("/inserirpontosValorant", function (req, res) {
    jogo_interesseController.inserirpontosValorant(req, res);
})



router.get("/verjogos", function (req, res) {
    jogo_interesseController.verjogos(req, res);
});




module.exports = router;

