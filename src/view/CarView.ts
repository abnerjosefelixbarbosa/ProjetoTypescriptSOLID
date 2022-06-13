import {CarController} from './../controller/CarController';
import {CarStrategy} from "../strategy/CarStrategy"
import { CarMVC } from '../abstraction/CarMVC';
import { Car } from '../model/entity/Car';

/*export const CarView = () => {
    let carStrategy = CarStrategy(CarController());
    let insertCar = (car: any) => carStrategy.insertCar(car);
    return {insertCar}
}*/

export class CarView extends CarMVC {
   

    private carStrategy: CarStrategy;

    constructor() {
        super();
        this.carStrategy = new CarStrategy(new CarController());
    }

    insertCar(car: Car) {
        return this.carStrategy.insertCar(car);
    }
}