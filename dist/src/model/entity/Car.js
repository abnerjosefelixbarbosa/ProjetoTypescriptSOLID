"use strict";
/*export const Car = (model: string, fabricator: string) => {
    return {model,fabricator};
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, fabricator) {
        this.model = model;
        this.fabricator = fabricator;
    }
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getFabricator = function () {
        return this.fabricator;
    };
    Car.prototype.setFabricator = function (fabricator) {
        this.fabricator = fabricator;
    };
    return Car;
}());
exports.Car = Car;
