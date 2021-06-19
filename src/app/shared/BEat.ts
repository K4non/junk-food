import { Ristorante } from "./Ristorante";


export class BEat {

    private restaurants : Ristorante[];

    constructor() {
        this.restaurants = [];
    }

    getRistoranti() : Ristorante[] {
        return this.restaurants;
    }

    setRistoranti(risto:Ristorante[]):void{
        this.restaurants = risto;
    }
}