import Person from './person';

class PersonBuilder{

    private name: string;
    private isEmployee: boolean;
    private isManager: boolean;
    private hours: number;
    private money: number;
    private shoppingList: string[];

    constructor(name: string) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager(hours: number = 40) {
        this.isManager = true;
        this.hours = 40;
        return this;
    }

    makePartTime(hours: number = 20) {
        this.hours = hours;
        return this;
    }

    withMoney(money: number) {
        this.money = money;
        return this;
    }

    withList(shoppingList: string[] = []) {
        this.shoppingList = shoppingList;
        return this;
    }

    build() {
        return new Person(this);
    }

}

export default PersonBuilder;