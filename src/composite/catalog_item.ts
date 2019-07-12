import ICatalog from './catalog_interface';

class CatalogItem implements ICatalog {

    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get total() {
        return this.price;
    }

    public print() {
        return `${this.name}, $${this.price}`;
    }

}

export default CatalogItem;