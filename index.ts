import {Car} from "./src/model/entity/Car";
import {CarStrategy} from "./src/strategy/CarStrategy";
import { CarView } from "./src/view/CarView";

const insertCar = () => {
    let car = new Car('a','a');
    let carStrategy = new CarStrategy(new CarView());
    let result = carStrategy.insertCar(car);
    console.log(result);
}

insertCar();