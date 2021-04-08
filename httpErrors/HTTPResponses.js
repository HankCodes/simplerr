'use strict'

const { HTTPError } = require('./HTTPError')

class HTTP400Error extends HTTPError {
    constructor(code = 400, message = '400 Bad request', body = {}) {
        super(code, message, body)
    }
}

class HTTP401Error extends HTTPError {
    constructor(code = 401, message = '401 Unauthorized', body = {}) {
        super(code, message, body)
    }
}

class HTTP403Error extends HTTPError {
    constructor(code = 403, message = '403 Forbidden', body = {}) {
        super(code, message, body)
    }
}

class HTTP404Error extends HTTPError {
    constructor(code = 404, message = '404 Not found', body = {}) {
        super(code, message, body)
    }
}

class HTTP500Error extends HTTPError {
    constructor(code = 500, message = '500 Internal Server Error', body = {}) {
        super(code, message, body)
    }
}

module.exports = {
    HTTP400Error,
    HTTP401Error,
    HTTP403Error,
    HTTP404Error,
    HTTP500Error
}