import { IObserver } from './types';

class Mall implements IObserver {

    sales: any[];

    constructor() {
        this.sales = [];
    }

    notify(storeName: string, discount: number) {
        this.sales.push({ storeName, discount });
    }

}

export default Mall; 