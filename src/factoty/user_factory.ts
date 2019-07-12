import Shopper from './shopper';
import Employee from './employee';

class UserFactory {

    public createUser(type: string, name: string, money?: number): Shopper | Employee {
        switch (type) {
            case 'shopper':
                return this.createShopper(name, money);
            case 'employee':
                return this.createEmployee(name);
        }
    }

    private createShopper(name: string, money: number): Shopper {
        return new Shopper(name, money);
    }

    private createEmployee(name: string): Employee {
        return new Employee(name);
    }

}

export default UserFactory;