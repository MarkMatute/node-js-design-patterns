import { IObserver } from './types';

class Shopper implements IObserver{

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(storeName: string, discount: number) {
        console.log(`${this.name}, there is a sale at ${storeName} @ ${discount}%`);
    }

}

export default Shopper;