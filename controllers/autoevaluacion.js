'use strict'

// Para simular la autorización por Token, se crea una variable booleana en ../config.token
const config = require('../config')

// ---------------------------------------------------------------
// Consultar autoevaluación
// ---------------------------------------------------------------
function getAutoevaluacion (req, res) {
    // Si el Token es válido (true), puede continuar con la petición
    if (config.token) {
        // Almacena el parámetro 'segmento' enviado en la petición
        const segmento = req.params.segmento

        // Leer BD (.json)
        var file = require("fs")
        var contAutEvalua = file.readFileSync("./DB/autoevaluacion.json")
        var jsonContAE = JSON.parse(contAutEvalua)
        var AutEvalua = []

        for(var key in jsonContAE.autoevaluacion){
            for (var i = 0; i < jsonContAE.autoevaluacion[key].length; i++) {
                AutEvalua.push(jsonContAE.autoevaluacion[key][i])
            }
        }

        res.status(200).send(AutEvalua)
    } else {
        res.status(401).send("La solicitud requiere autenticación de usuario")
    }
}

// ---------------------------------------------------------------
// Consultar autoevaluación por segmento
// ---------------------------------------------------------------
function getSegAutoevaluacion (req, res) {
    // Si el Token es válido (true), puede continuar con la petición
    if (config.token) {
        // Almacena el parámetro 'segmento' enviado en la petición
        const segmento = req.params.segmento

        // Leer BD (.json)
        var file = require("fs")
        var contAutEvalua = file.readFileSync("./DB/autoevaluacion.json")
        var jsonContAE = JSON.parse(contAutEvalua)
        var AutEvalua = []

        for(var key in jsonContAE.autoevaluacion){
            if (key == segmento) {
                AutEvalua = jsonContAE.autoevaluacion[key]
            }
        }

        if (AutEvalua.length > 0)
          res.status(200).send(AutEvalua)
        else
          res.status(400).send("La solicitud no pudo ser entendida por el servidor debido a una sintaxis mal formada.")
    } else {
        res.status(401).send("La solicitud requiere autenticación de usuario")
    }
}

// ---------------------------------------------------------------
// Consultar Calificación especifica por segmento
// ---------------------------------------------------------------
function getSegUnikAutoeval (req, res) {
    // Si el Token es válido (true), puede continuar con la petición
    if (config.token) {
        // Almacena el parámetro 'segmento' enviado en la petición
        const segmento = req.params.segmento
        // Almacena el parámetro 'segmento' enviado en la petición
        const nombre = req.query.nombre

        // Leer BD (.json)
        var file = require("fs")
        var contAutEvalua = file.readFileSync("./DB/autoevaluacion.json")
        var jsonContAE = JSON.parse(contAutEvalua)
        var AutEvalua = []

        for(var key in jsonContAE.autoevaluacion){
            if (key == segmento) {
                AutEvalua = jsonContAE.autoevaluacion[key]
            }
        }

        if (AutEvalua.length > 0) {
            var unikAutoeval = []
            AutEvalua.filter(function(key) {
                if (key.nombre.includes(nombre)) {
                    unikAutoeval.push(key)
                }
            })

            if (unikAutoeval.length > 0)
                res.status(200).send(unikAutoeval)
            else
                res.status(200).send("No se obtuvieron resultados para el nombre ingresado.")
        } else
          res.status(400).send("La solicitud no pudo ser entendida por el servidor debido a una sintaxis mal formada.")
    } else {
        res.status(401).send("La solicitud requiere autenticación de usuario")
    }
}

module.exports = {
    getAutoevaluacion,
    getSegAutoevaluacion,
    getSegUnikAutoeval
}
