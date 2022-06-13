import { CarMVC } from "../abstraction/CarMVC";
import {CarBusiness} from "../model/business/CarBusiness";
import { Car } from "../model/entity/Car";
import {CarStrategy} from "../strategy/CarStrategy";

/*export const CarController = () => {
    let carStrategy = CarStrategy(CarBusiness());
    let insertCar = (car: any) => carStrategy.insertCar(car);
    return {insertCar}
}*/

export class CarController extends CarMVC {

    private carStrategy: CarStrategy;
    
    constructor() {
        super();
        this.carStrategy = new CarStrategy(new CarBusiness());
    }
    
    insertCar(car: Car) {
        return this.carStrategy.insertCar(car);
    }
    
}
