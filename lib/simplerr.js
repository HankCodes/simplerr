'use strict'
const errorPipeline = require('./errorPipeline')

const simplerr = (errorFile) => {
    return (_req, res, next) => {
        res.sendError = (error) => errorPipeline(error, res, errorFile)
        next()
    } 
} 

module.exports = simplerr
