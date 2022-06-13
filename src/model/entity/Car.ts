/*export const Car = (model: string, fabricator: string) => {
    return {model,fabricator};
}*/

export class Car {

    private model: string;
    private fabricator: string;

    constructor(model: string,fabricator: string) {
        this.model = model;
        this.fabricator = fabricator;
    }

    getModel() {
        return this.model;
    }

    setModel(model: string) {
        this.model = model;
    }

    getFabricator() {
        return this.fabricator;
    }

    setFabricator(fabricator: string) {
        this.fabricator = fabricator;
    }
}