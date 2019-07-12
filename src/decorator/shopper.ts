import { IItem } from './item';

class Shopper {

    account: number;
    name: string;

    constructor(name: string, account: number) {
        this.name = name;
        this.account = account;
    }

    public purchase(item: IItem) {
        if (item.price > this.account) {
            console.log(`Unable to purchase: ${item.name}`);
            return;
        }
        this.account -= item.price;
        console.log(`${this.name} is purchased!`);
    }

    get balance() {
        return this.account;
    }

}

export default Shopper;