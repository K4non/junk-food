import { Prodotto } from "./Prodotto";

export class Ordine{
    constructor(private nomeRistorante:string, private prodotto:Prodotto, private quantitaProdotto:number){
        
    }

    getNomeRistorante(){
        return this.nomeRistorante;
    }

    getNomeProdotto(){
        return this.prodotto.getNome();
    }

    calcolaPrezzoPerProdotto(){
        return this.prodotto.getPrezzo() * this.quantitaProdotto;
    }
}