import LoggerStrategy from './logger_strategy';
import config from './config.js';

class Logger {

    private currentStrategy: string = 'none';
    private strategy = LoggerStrategy.none;

    constructor() {
        this.changeStrategy(config.strategy);
    }

    public log(message: string, caller: string) {
        this.strategy(message, caller);
    }

    public changeStrategy(newStrategy: string) {
        this.currentStrategy = newStrategy;
        this.strategy = LoggerStrategy[newStrategy];
    }

    get getCurrentStrategy() {
        return this.currentStrategy;
    }

}

export default Logger;