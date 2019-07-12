import express, { Application, Router, Request, Response } from 'express';
import bodyParser from 'body-parser';


// Singleton
import Logger from './singleton/logger';
import singletonConsumer1 from './singleton/consumer1';
import singletonConsumer2 from './singleton/consumer2';

interface IApp {
    instance: Application;
    registerMiddlewares(): void;
    registerRoutes(): void;
}

class App implements IApp {

    instance: Application;

    constructor() {
        this.instance = express();
        this.instance.set('PORT', 3000);
        this.instance.use(express.json());
        this.registerMiddlewares();
        this.registerRoutes();
    }

    registerMiddlewares() {
        this.instance.use(bodyParser.json({ limit: '5mb' }));
        this.instance.use(bodyParser.urlencoded({ limit: '5mb' }));
    }

    registerRoutes() {
        const router = Router();

        // Singleton
        router.get('/singleton', (request: Request, response: Response) => {
            Logger.log('Singleton Route...', 'App.js');
            singletonConsumer1();
            singletonConsumer2();
            response.json({
                logCount: Logger.logCounter,
                callers: Logger.allCallers
            });
        });

        // Mount router
        this.instance.use(router);
    }

}

export default App;