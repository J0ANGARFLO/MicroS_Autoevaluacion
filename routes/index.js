'use strict'

const express = require('express')
const aEvaluacionCtrl = require('../controllers/autoevaluacion')
const api = express.Router()

api.get('/services/autoevaluacion', aEvaluacionCtrl.getAutoevaluacion)
api.get('/services/autoevaluacion/:segmento', aEvaluacionCtrl.getSegAutoevaluacion)
api.get('/services/autoevaluacionUnik/:segmento', aEvaluacionCtrl.getSegUnikAutoeval)

module.exports = api
