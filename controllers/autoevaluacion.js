'use strict'

// ---------------------------------------------------------------
// Consultar autoevaluación
// ---------------------------------------------------------------
function getAutoevaluacion (req, res) {
    const segmento = req.query.segmento

    // Leer BD (.json)
    var file = require("fs")
    var contAutEvalua = file.readFileSync("./DB/autoevaluacion.json")
    var jsonContAE = JSON.parse(contAutEvalua)
    var AutEvalua = []

    // for(var key in jsonContAE.autoevaluacion){
    //     if (key == segmento) {
    //         AutEvalua = jsonContAE.autoevaluacion[key]
    //     }
    // }

    switch (segmento) {
        case "talleres":
            AutEvalua = jsonContAE.autoevaluacion[segmento]
            break
        case "blogs":
            AutEvalua = jsonContAE.autoevaluacion[segmento]
            break
        default:
            AutEvalua = []
    }

    if (AutEvalua.length > 0)
      res.status(200).send(AutEvalua)
    else
      res.status(400).send("La solicitud no pudo ser entendida por el servidor debido a una sintaxis mal formada.")
}

module.exports = {
    getAutoevaluacion
}
