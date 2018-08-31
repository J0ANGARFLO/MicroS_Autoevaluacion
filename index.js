'use strict'

const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
	console.log(`API REST Autoevaluación ejecutándose en http://localhost:${config.port}`)
})
