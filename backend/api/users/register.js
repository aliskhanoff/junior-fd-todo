//authentication via jwt token
const bcrypt = require("bcryptjs");
const handle = (fastify, req, reply) => {

        const { identifier, password, first_name, last_name, third_name} = req.body;
        //const jwt = fastify.jwt;


        fastify.knex("users")
            .where({ email: identifier})
            .select("id")
            .then((data, err) => {
                if(data[0] != null) {
                    reply.send(`Email ${identifier} already exists`);
                }

                else {
                    fastify.knex("users").insert({ email: identifier, password: bcrypt.hashSync(password), first_name, sur_name: last_name, third_name });
                        reply.send({ message: "OK" })
                }
                
            })
            
            .catch(e => reply.send({message: { code: 500, description: `internal server error. Try again later... ${e}` } }))
            };

            module.exports = (fastify) => {

                fastify.route({
                    method: "POST", 
                    path: "/register/local",
                    onRequest: fastify.csrfProtection,
                    handler: async (req, reply) => handle(fastify, req, reply)
                })

                return fastify;

            }
