import { BEat } from "./BEat";
import { Prodotto } from "./Prodotto";
import { Ristorante } from "./Ristorante";


const prodotto1 = new Prodotto(1, "Canguro alla brace", 10.5, ["canguro", "patate", "sale", "riso"]);
const prodotto12 = new Prodotto(2, "Canguro al forno", 11.5, ["canguro", "patate", "sale", "pepe"]);
const risto1 = new Ristorante(1, "Cangarooo", "canguro", "Via volturno 15, 21500 Milano", [prodotto1, prodotto12], '../../assets/cangaroo5.jpg');

const prodotto2 = new Prodotto(2, "Coccodrilo alla spiedo", 20, ["coccodrillo", "patate", "curry", "olio", "cipolla"]);
const risto2 = new Ristorante(2, "Crocco-Gnam", "coccodrillo", "Via Messaggero 1, 21500 Milano", [prodotto2], '../../assets/crocodile2.jpg');

const prodotto3 = new Prodotto(3, "Bistec a cavallo ", 22.5, ["cavallo", "patate", "sale", "uova"]);
const risto3 = new Ristorante(3, "Galoppini", "caballo", "Via di corsa 63, 21500 Milano", [prodotto3], '../../assets/cavallo.jpg');

const prodotto4 = new Prodotto(4, "Anatra arrosto", 9.5, ["anatra", "aglio", "olio", "pepe"]);
const risto4 = new Ristorante(4, "Al volo", "anatra", "Via volante 101, 21500 Milano", [prodotto4], '../../assets/anatra.jpg');

export const allRestaurants = new BEat();

allRestaurants.setRistoranti([risto1, risto2, risto3, risto4]);
