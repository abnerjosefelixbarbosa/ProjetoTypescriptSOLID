"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("./src/model/entity/Car");
var CarStrategy_1 = require("./src/strategy/CarStrategy");
var CarView_1 = require("./src/view/CarView");
var insertCar = function () {
    var car = new Car_1.Car('a', 'a');
    var carStrategy = new CarStrategy_1.CarStrategy(new CarView_1.CarView());
    var result = carStrategy.insertCar(car);
    console.log(result);
};
insertCar();
