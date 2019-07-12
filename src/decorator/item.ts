export interface IItem {
    price: number;
    name: string;
}

export class Item implements IItem {

    price: number;
    name: string;

    constructor(name: string , price: number) {
        this.name = name;
        this.price = price;
    }

}

export class GoldenItem implements IItem {
    price: number;
    name: string;

    constructor(baseItem: IItem) {
        this.name = `Golden: ` + baseItem.name;
        this.price = baseItem.price + 1000;
    }

}