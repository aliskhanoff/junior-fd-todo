const fastify = require('fastify')()
const path    = require("path")
const knex    = require('knex')(require('./knexfile')['development']);
const users   = require('./api/users/auth');
const register = require('./api/users/register');

const PORT    = process.env.PORT || 3000;

  //knex modules
  fastify.knex  = knex;

  fastify
  
    .register(require('fastify-jwt'), {  secret: process.env.TOKEN_SECRET || 12345 })
    .register(require('fastify-cookie'), { secret: process.env.COOKIE_SECRET }) // See following section to ensure security
    .register(require('fastify-csrf'), { cookieOpts: { signed: true } })
    .register(require('fastify-formbody'))
    .register(require('fastify-static'), {
      root: path.join(__dirname, '../frontend/build'),
      prefix: '/', // optional: default '/'
    });


  //default routes
  users(fastify)
  register(fastify)
    .get('/protect/xsrf', (req, reply) => {
      return reply.generateCsrf();
    })
    // .post('/protect/token', (req, reply) => {
    //   return fastify.jwt.sign({ hello: "world" });
    // })



.listen(PORT)