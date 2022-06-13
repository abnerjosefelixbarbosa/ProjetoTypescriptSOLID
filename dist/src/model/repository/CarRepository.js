"use strict";
/*export const CarRepository = () => {
    let insertCar = (car: any) => "Car inserted!";
    return {insertCar}
}*/
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
exports.CarRepository = void 0;
var CarMVC_1 = require("../../abstraction/CarMVC");
var CarRepository = /** @class */ (function (_super) {
    __extends(CarRepository, _super);
    function CarRepository() {
        return _super.call(this) || this;
    }
    CarRepository.prototype.insertCar = function (car) {
        return "Car inserted!";
    };
    return CarRepository;
}(CarMVC_1.CarMVC));
exports.CarRepository = CarRepository;
