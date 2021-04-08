'use strict'

const simplerr = (errorFile) => (error, res) => errorPipeline(error, res, errorFile)

module.exports = simplerr
