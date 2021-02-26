const fastify = require('fastify')()
const PORT = process.env.PORT || 3000;

const path = require("path")
const knex = require('knex');

fastify.knex = knex;
fastify.knex.connect = () => knex(require('./knexfile').development);

fastify
  .register(require('fastify-formbody'))
  .register(require('fastify-static'), {
    root: path.join(__dirname, '../frontend/build'),
    prefix: '/', // optional: default '/'
  })

  .get('/hello', (req, reply) => {
    reply.send({ message: "hello" })
  })

  //login path
  .post('/login', (req, reply) => {
    reply.send({ hello: 'login' })
  })

  //register path
  .post('/register', (req, reply) => {
    reply.send({ hello: 'register' })
  })


.listen(PORT)