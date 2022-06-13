/*export const CarRepository = () => {
    let insertCar = (car: any) => "Car inserted!";
    return {insertCar}
}*/

import { CarMVC } from "../../abstraction/CarMVC";
import { Car } from "../entity/Car";

export class CarRepository extends CarMVC {

    constructor() {
        super();
    }
    
    public insertCar(car: Car) {
        return "Car inserted!";
    }

}
