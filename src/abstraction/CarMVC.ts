import { Car } from "../model/entity/Car";

export abstract class CarMVC {
    abstract insertCar(car: Car): any;
}