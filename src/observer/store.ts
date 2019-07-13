import { IObserverable, IObserver } from './types';

class Store implements IObserverable {

    name: string;
    subscribers: IObserver[];

    constructor(name: string) {
        this.name = name;
        this.subscribers = [];
    }

    sale(discount: number) {
        console.log(`Announce Sale at ${this.name} @ ${discount}%!`);
        this.subscribers.forEach(subscriber => subscriber.notify(this.name, discount));
    }

    subscribe(observer: IObserver) {
        this.subscribers.push(observer);
    }

}

export default Store;