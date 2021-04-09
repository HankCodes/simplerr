'use strict'

const errorFactory = require('./errorFactory')

module.exports = (error, res, errorFile) => {
    const newError = generateErrorResponse(error, errorFile) 

    res.status(newError.statusCode)
    res.send(JSON.stringify(newError.body))
}

const generateErrorResponse = (error, errorFile) => {
    if (hasKnownErrorConstructor(error)) return error 

    const foundError = findError(error, errorFile) 
    return foundError ?
        errorFactory(foundError) : 
        errorFactory()
}

const hasKnownErrorConstructor = (error) => {
    return [
        'HTTP400Error', 
        'HTTP401Error',
        'HTTP403Error',
        'HTTP404Error',
        'HTTP422Error',
        'HTTP500Error'].includes(error.constructor.name) 
}

const findError = (error, errorFile) => {
    return errorFile.find(err => error.message.includes(err.error))
}