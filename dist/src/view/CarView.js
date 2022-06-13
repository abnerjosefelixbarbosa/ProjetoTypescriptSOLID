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
exports.CarView = void 0;
var CarController_1 = require("./../controller/CarController");
var CarStrategy_1 = require("../strategy/CarStrategy");
var CarMVC_1 = require("../abstraction/CarMVC");
/*export const CarView = () => {
    let carStrategy = CarStrategy(CarController());
    let insertCar = (car: any) => carStrategy.insertCar(car);
    return {insertCar}
}*/
var CarView = /** @class */ (function (_super) {
    __extends(CarView, _super);
    function CarView() {
        var _this = _super.call(this) || this;
        _this.carStrategy = new CarStrategy_1.CarStrategy(new CarController_1.CarController());
        return _this;
    }
    CarView.prototype.insertCar = function (car) {
        return this.carStrategy.insertCar(car);
    };
    return CarView;
}(CarMVC_1.CarMVC));
exports.CarView = CarView;
