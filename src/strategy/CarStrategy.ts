/*export const CarStrategy = (carMVC: any) => {
    let insertCar = (car: any) => carMVC.insertCar(car);
    return {insertCar} 
}*/

import { CarMVC } from "../abstraction/CarMVC";
import { Car } from "../model/entity/Car";

export class CarStrategy {
    
    private carMVC: CarMVC;

    constructor(carMVC: CarMVC) {
        this.carMVC = carMVC;
    }

    public insertCar(car: Car): string {
        return this.carMVC.insertCar(car);
    }
}
