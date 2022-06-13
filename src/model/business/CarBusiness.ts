import { CarMVC } from "../../abstraction/CarMVC";
import {CarStrategy} from "../../strategy/CarStrategy";
import { Car } from "../entity/Car";
import {CarRepository} from "../repository/CarRepository";

/*export const CarBusiness = () => {
    let carStrategy = CarStrategy(CarRepository());
    let insertCar = (car: any) => {
        if (car.model === "") {
            return "Model is empty!"; 
        } else if (car.fabricator === "") {
            return "Fabricator is empty!"; 
        } else {
            return carStrategy.insertCar(car);
        }        
    };
    return {insertCar} 
}*/

export class CarBusiness extends CarMVC {
    
    private carStrategy: CarStrategy

    constructor() {
        super();
        this.carStrategy = new CarStrategy(new CarRepository());
    }

    public insertCar(car: Car) {
        if (car.getModel() === "") {
            return "Model is empty!"; 
        } else if (car.getFabricator() === "") {
            return "Fabricator is empty!"; 
        } else {
            return this.carStrategy.insertCar(car);
        }  
    }
}