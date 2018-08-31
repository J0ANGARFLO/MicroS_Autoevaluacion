'use strict'

const express = require('express')
const aEvaluacionCtrl = require('../controllers/autoevaluacion')
const api = express.Router()

/**
* @api {get} api/services/autoevaluacion/:segmento Obtener todo el conjunto de la autoevaluación
* @apiVersion 1.0.0
* @apiName GetAutoevaluacion
* @apiGroup Services
* @apiPermission Token de autorización
*
*
* @apiExample {js} Ejemplo de uso:
* http://localhost:5000/api/services/autoevaluacion
*
* @apiSuccess {String} nombre       Nombre del Taller/Blog
* @apiSuccess {String} Fecha        Fecha de creación Taller/Blog
* @apiSuccess {String} modalidad    Si el Taller/Blog fue grupal o individual
* @apiSuccess {String} autor        Persona o personas que realizaron el Taller/Blog
* @apiSuccess {String} url          Ruta donde está almacenado el Taller/Blog
* @apiSuccess {String} url_git      Repositorio git. Únicamente para el segmento Trabajos. OPCIONAL
* @apiSuccess {String} calificacion Autoevaluación otorgada del Taller/Blog
*
* @apiSuccessExample {json} Respuesta exitosa:
*     HTTP 200 OK
*     [
*       {
*           "nombre": "Taller 1 - Documento Visión",
*           "Fecha": "11-08-2018",
*           "modalidad": "Grupal",
*           "autor": "Arturo Verbel, Edward Castañeda, José Andrés García Flórez",
*           "url": "https://docs.google.com/document/d/1RS9TYuPZdgM11ffVIkxhDTK86SJ_X7mYdrYDYIC1WUw/edit",
*           "url_git": "",
*           "calificacion": 3.5
*       },
*       ...
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
api.get('/services/autoevaluacion', aEvaluacionCtrl.getAutoevaluacion)

/**
* @api {get} api/services/autoevaluacion/:segmento Obtener autoevaluación de un segmento concreto
* @apiVersion 1.0.0
* @apiName GetSegAutoevaluacion
* @apiGroup Services
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
* @apiSuccess {String} url_git      Repositorio git. Únicamente para el segmento Trabajos. OPCIONAL
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

/**
* @api {get} api/services/autoevaluacionUnik/:segmento Obtener autoevaluación de un unico Trabajo/Blog de un segmento concreto
* @apiVersion 1.0.0
* @apiName GetSegUnikAutoeval
* @apiGroup Services
* @apiPermission Token de autorización
*
* @apiParam {String} segmento La categoría a consultar. Valores permitidos: talleres, blogs
* @apiParam {String} nombre Texto por el cual se buscara el Trabajo/blog
*
* @apiExample {js} Ejemplo de uso:
* http://localhost:5000/api/services/autoevaluacionUnik/blogs?nombre=Blog 3
*
* @apiSuccess {String} nombre       Nombre del Taller/Blog
* @apiSuccess {String} Fecha        Fecha de creación Taller/Blog
* @apiSuccess {String} modalidad    Si el Taller/Blog fue grupal o individual
* @apiSuccess {String} autor        Persona o personas que realizaron el Taller/Blog
* @apiSuccess {String} url          Ruta donde está almacenado el Taller/Blog. OPCIONAL
* @apiSuccess {String} url_git      Repositorio git. Únicamente para el segmento Trabajos. OPCIONAL
* @apiSuccess {String} calificacion Autoevaluación otorgada del Taller/Blog
*
* @apiSuccessExample {json} Respuesta exitosa:
*     HTTP 200 OK
*     [
*       {
*           "nombre": "Blog 3 - VIRTUALIZACIÓN Y CONTENEDORES",
*           "Fecha": "25-08-2018",
*           "modalidad": "Individual",
*           "autor": "José Andrés García Flórez",
*           "url": "http://datosinformaticadiadia.blogspot.com/2018/08/virtualizacion-y-contenedores.html",
*           "calificacion": 5
*       }
*     ]
*
* @apiUse UnauthorizedError
*/
api.get('/services/autoevaluacionUnik/:segmento', aEvaluacionCtrl.getSegUnikAutoeval)

module.exports = api
