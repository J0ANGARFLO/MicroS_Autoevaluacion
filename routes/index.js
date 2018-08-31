'use strict'

const express = require('express')
const aEvaluacionCtrl = require('../controllers/autoevaluacion')
const api = express.Router()

api.get('/services/autoevaluacion', aEvaluacionCtrl.getAutoevaluacion)

module.exports = api
