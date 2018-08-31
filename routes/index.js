'use strict'

const express = require('express')
const aEvaluacionCtrl = require('../controllers/autoevaluacion')
const api = express.Router()

api.get('/services/autoevaluacion', aEvaluacionCtrl.getAutoevaluacion)

/**
* @api {get} api/services/autoevaluacion/:segmento Obtiene autoevaluación de un segmento concreto
* @apiVersion 1.0.0
* @apiName GetSegAutoevaluacion
* @apiGroup Autoevaluacion
* @apiPermission Token de autorización
*
* @apiParam {String} segmento La categoría a consultar. Valores permitidos: talleres, blogs
*
* @apiExample {js} Ejemplo de uso:
* http://localhost:5000/api/services/autoevaluacion/blogs
*
* @apiSuccess {String} nombre       Nombre del Taller/Blog
* @apiSuccess {String} Fecha        Fecha de creación Taller/Blog
* @apiSuccess {String} modalidad    Si el Taller/Blog fue grupal o individual
* @apiSuccess {String} autor        Persona o personas que realizaron el Taller/Blog
* @apiSuccess {String} url          Ruta donde está almacenado el Taller/Blog
* @apiSuccess {String} url_git      Si el Taller/Blog tiene un repositorio git, ira acá
* @apiSuccess {String} calificacion Autoevaluación otorgada del Taller/Blog
*
* @apiSuccessExample {json} Respuesta exitosa:
*     HTTP 200 OK
*     [
*       {
*           "nombre": "Blog 1 - DEVOPS",
*           "Fecha": "13-08-2018",
*           "modalidad": "Individual",
*           "autor": "José Andrés García Flórez",
*           "url": "http://datosinformaticadiadia.blogspot.com/2018/08/ausente-pero-en-la-juega-devops-jmespath.html",
*           "calificacion": 5
*       }..
*     ]
*
* @apiUse UnauthorizedError
*/
api.get('/services/autoevaluacion/:segmento', aEvaluacionCtrl.getSegAutoevaluacion)
api.get('/services/autoevaluacionUnik/:segmento', aEvaluacionCtrl.getSegUnikAutoeval)

module.exports = api
