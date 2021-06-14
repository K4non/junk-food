import { BEat } from "./BEat";
import { Prodotto } from "./Prodotto";
import { Ristorante } from "./Ristorante";



const prodotto1 = new Prodotto(1, "Canguro alla brace", ["canguro", "patate", "sale", "riso"]);
const prodotto12 = new Prodotto(2, "Canguro al forno", ["canguro", "patate", "sale", "pepe"]);
const risto1 = new Ristorante(1, "Cangarooo", "canguro", "Via volturno 15, 21500 Milano", [prodotto1, prodotto12]);



const prodotto2 = new Prodotto(2, "Coccodrilo alla spiedo", ["coccodrillo", "patate", "curry", "olio", "cipolla"]);
const risto2 = new Ristorante(2, "Crocco-Gnam", "coccodrillo", "Via Messaggero 1, 21500 Milano", [prodotto2]);

const prodotto3 = new Prodotto(3, "Bistec a cavallo ", ["cavallo", "patate", "sale", "uova"]);
const risto3 = new Ristorante(3, "Galoppini", "caballo", "Via di corsa 63, 21500 Milano", [prodotto3]);

const prodotto4 = new Prodotto(4, "Anatra arrosto", ["anatra", "aglio", "olio", "pepe"]);
const risto4 = new Ristorante(4, "Al volo", "anatra", "Via volante 101, 21500 Milano", [prodotto4]);

export const allRestaurants = new BEat();

allRestaurants.setRistoranti([risto1,risto2,risto3,risto4]);
