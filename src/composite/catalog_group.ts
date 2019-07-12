import ICatalog from './catalog_interface';

class CatalogGroup implements ICatalog {

    name: string;
    composites: ICatalog[];

    constructor(name: string, composites: ICatalog[]) {
        this.name = name;
        this.composites = composites;
    }

    get total(): number {
        return this.composites.reduce((total, next) => total + next.total, 0);
    }

    print(): string {
        let catalogs = `${this.name}`;
        this.composites.forEach((composite) => catalogs += ` | ${composite.print()}`);
        return catalogs;
    }


}

export default CatalogGroup;