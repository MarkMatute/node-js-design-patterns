class Shopper {

    private name: string;
    private money: number;

    constructor(name: string, money : number = 0) {
        this.name = name;
        this.money = money;
    }

    get details() {
        return `${this.name} - ${this.money} - SHOPPER`;
    }

    set setName(newName: string) {
        this.name = newName;
    }

    set setMoney(newMoney: number) {
        this.money = newMoney;
    }

}

export default Shopper;