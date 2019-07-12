class Employee {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    get details() {
        return `${this.name} - EMPLOYEE`;
    }

    set setName(newName: string) {
        this.name = newName;
    }

}

export default Employee;