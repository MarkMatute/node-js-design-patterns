class Person {

    private name: string;
    private isEmployee: boolean;
    private isManager: boolean;
    private hours: number;
    private money: number;
    private shoppingList: string[];

    constructor(builder: any) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.hours = builder.hours || 0;
        this.money = builder.money || 0;
        this.shoppingList = builder.shoppingList || [];
    }

    public toString() {
        return JSON.stringify(this);
    }

}

export default Person;