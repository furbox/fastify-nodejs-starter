class Server {
    constructor() {
        this.port = process.env.PORT || 8000;
        this.fastify = require('fastify')({
            logger: {
                prettyPrint: true
            }
        });
    }


    listen() {
        this.fastify.listen(this.port, (err, address) => {
            if (err) {
                this.fastify.log.error(err)
                process.exit(1)
            }
            this.fastify.log.info(`server listening on ${address}`)
        });
    }
}


module.exports = Server;