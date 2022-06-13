"use strict";
/*export const CarStrategy = (carMVC: any) => {
    let insertCar = (car: any) => carMVC.insertCar(car);
    return {insertCar}
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarStrategy = void 0;
var CarStrategy = /** @class */ (function () {
    function CarStrategy(carMVC) {
        this.carMVC = carMVC;
    }
    CarStrategy.prototype.insertCar = function (car) {
        return this.carMVC.insertCar(car);
    };
    return CarStrategy;
}());
exports.CarStrategy = CarStrategy;
