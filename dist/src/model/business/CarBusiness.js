"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBusiness = void 0;
var CarMVC_1 = require("../../abstraction/CarMVC");
var CarStrategy_1 = require("../../strategy/CarStrategy");
var CarRepository_1 = require("../repository/CarRepository");
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
var CarBusiness = /** @class */ (function (_super) {
    __extends(CarBusiness, _super);
    function CarBusiness() {
        var _this = _super.call(this) || this;
        _this.carStrategy = new CarStrategy_1.CarStrategy(new CarRepository_1.CarRepository());
        return _this;
    }
    CarBusiness.prototype.insertCar = function (car) {
        if (car.getModel() === "") {
            return "Model is empty!";
        }
        else if (car.getFabricator() === "") {
            return "Fabricator is empty!";
        }
        else {
            return this.carStrategy.insertCar(car);
        }
    };
    return CarBusiness;
}(CarMVC_1.CarMVC));
exports.CarBusiness = CarBusiness;
