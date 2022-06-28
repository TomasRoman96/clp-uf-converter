import express from 'express';
import cors from 'cors';

export class Server {
    app: express.Application;
    port: NodeJS.Process | any
    clupUfMovements: string;
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.clupUfMovements = '/clpUf';
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.clupUfMovements, require('../routes/routes.clpuf'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}
