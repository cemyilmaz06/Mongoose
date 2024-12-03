'use strict'

module.exports = (err, req, res, next)=> {

     const errorStatusCode = res.statusCode || 500

     res.status(errorStatusCode).send({
        error: true,
     })
}