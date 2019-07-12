import express, { Application, Router, Request, Response } from 'express';
import bodyParser from 'body-parser';


// Singleton
import Logger from './singleton/logger';
import singletonConsumer1 from './singleton/consumer1';
import singletonConsumer2 from './singleton/consumer2';

// Strategy
import StratigicyLogger from './strategy/logger';

// Factory
import UserFactory from './factoty/user_factory';

// Builder
import PersonBuilder from './builder/person_builder';

// Composite
import CatalogItem from './composite/catalog_item';
import CatalogGroup from './composite/catalog_group';

// Decorator
import DecoratorShopper from './decorator/shopper';
import { Item as DecoratorItem, GoldenItem } from './decorator/item';

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

        // Strategy
        router.get('/strategy', (request: Request, response: Response) => {
            const stratigicLogger = new StratigicyLogger();
            stratigicLogger.log(new Date().toString(), 'toConsole...');
            stratigicLogger.changeStrategy('toFile');
            stratigicLogger.log(new Date().toString(), 'toFile...');
            response.json({ currentStrategy: stratigicLogger.getCurrentStrategy });
        });


        // Factory
        router.get('/factory', (request: Request, response: Response) => {
            const userFactory = new UserFactory();
            const shopper = userFactory.createUser('shopper', 'Mark', 1000);
            const employee = userFactory.createUser('employee', 'Wena');
            response.json({
                shopper: shopper.details,
                employee: employee.details
            });
        });

        // Builder
        router.get('/builder', (request: Request, response: Response) => {
            const manager = new PersonBuilder('Mark').makeEmployee().makeManager(70).build();
            const partTimer = new PersonBuilder('Wena').makeEmployee().makePartTime(20).withMoney(1000).withList([ 'Iphone XS', 'Dress' ]).build();
            response.json({
                manager: manager.toString(),
                partTimer: partTimer.toString()
            });
        });

        // Composites
        router.get('/composites', (request: Request, response: Response) => {
            const boots = new CatalogItem('Leather Boots', 80);
            const sneakers = new CatalogItem('Nike', 80);
            const slipperGroup = new CatalogGroup('Slippers Group', [
                new CatalogItem('Slipper 1', 50),
                new CatalogItem('Slipper 2', 90)
            ]);
            const catalogGroup = new CatalogGroup('Shoes & Such', [
                boots,
                sneakers,
                slipperGroup
            ]);
            response.json({
                catalogGroup: catalogGroup.print(),
                total: catalogGroup.total
            });
        });

        // Decorator
        router.get('/decorator', (request: Request, response: Response) => {
            const shopper = new DecoratorShopper('Mark', 1000);
            const regularItem = new DecoratorItem('Regular Item', 1000);
            const goldenItem = new GoldenItem(regularItem);
            console.log('regular price', regularItem.price);
            console.log('golden price', goldenItem.price);
            shopper.purchase(goldenItem);
            response.json({
                shopperBalance: shopper.balance
            });
        });

        // Mount router
        this.instance.use(router);
    }

}

export default App;