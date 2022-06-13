"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var CarStrategy_1 = __importDefault(require("../../strategy/CarStrategy"));
var CarRepository_1 = __importDefault(require("../repository/CarRepository"));
var CarBusiness = function () {
    var carStrategy = (0, CarStrategy_1.default)((0, CarRepository_1.default)());
    var insertCar = function (car) {
        if (car.model === "") {
            return "Model is empty!";
        }
        else if (car.fabricator === "") {
            return "Fabricator is empty!";
        }
        else {
            return carStrategy.insertCar(car);
        }
    };
    return { insertCar: insertCar };
};
module.exports = CarBusiness;
