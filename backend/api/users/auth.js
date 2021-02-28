//authentication via jwt token
const bcrypt = require("bcrypt");

    const handle = (fastify, req, reply) => {

        const {identifier, password} = req.body;
        const jwt = fastify.jwt;

        fastify.knex("users").where({ email: identifier}).select("*")
            .then(data => {

                if(data[0] != undefined && bcrypt.compareSync(password, data[0].password, 10)) {
                    
                    return reply.send({
                        token: jwt.sign({ email: data[0].email, id: data[0].id }),
                        user: {
                            id:             data[0].id,
                            first_name:     data[0].first_name,
                            sur_name:       data[0].sur_name,
                            third_name:     data[0].third_name || "",
                            avatar_url:     data[0].avatar_url || "",
                            email:          data[0].email,
                            is_confirmed:   data[0].is_confirmed,
                            is_deactivated: data[0].is_deactivated,
                        },
                    });

                }
                
                else {
                    return reply.send({
                        message: "USER NOT FOUND", 
                        code: 404
                    })
                }

    })

    .catch(e => {

        reply.send({
            message: { code: 500, description: `internal server error. Try again later... ${e}` }
        })
    });


}

module.exports = (fastify) => {

    fastify.route({
        method: "POST", 
        path: "/auth/local",
        onRequest: fastify.csrfProtection,
        handler: async (req, reply) => handle(fastify, req, reply)
    })

    return fastify;
}

