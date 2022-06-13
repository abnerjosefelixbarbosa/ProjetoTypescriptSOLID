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
exports.CarController = void 0;
var CarMVC_1 = require("../abstraction/CarMVC");
var CarBusiness_1 = require("../model/business/CarBusiness");
var CarStrategy_1 = require("../strategy/CarStrategy");
/*export const CarController = () => {
    let carStrategy = CarStrategy(CarBusiness());
    let insertCar = (car: any) => carStrategy.insertCar(car);
    return {insertCar}
}*/
var CarController = /** @class */ (function (_super) {
    __extends(CarController, _super);
    function CarController() {
        var _this = _super.call(this) || this;
        _this.carStrategy = new CarStrategy_1.CarStrategy(new CarBusiness_1.CarBusiness());
        return _this;
    }
    CarController.prototype.insertCar = function (car) {
        return this.carStrategy.insertCar(car);
    };
    return CarController;
}(CarMVC_1.CarMVC));
exports.CarController = CarController;
