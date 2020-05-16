'use strict'

module.exports = function (fastify, opts, next) {

  fastify.get('/', function (request, reply) {
    reply.send({ ok: true });
  })

  next()
}

