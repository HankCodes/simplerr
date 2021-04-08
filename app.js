'use strict'
const simplerr = require('./lib/simplerr')
const { 
    HTTP400Error,
    HTTP401Error,
    HTTP403Error,
    HTTP404Error,
    HTTP500Error 
    } = require('./httpErrors/HTTPResponses')

module.exports = simplerr
module.exports.HTTP400Error = HTTP400Error 
module.exports.HTTP401Error = HTTP401Error 
module.exports.HTTP403Error = HTTP403Error 
module.exports.HTTP404Error = HTTP404Error 
module.exports.HTTP500Error = HTTP500Error 