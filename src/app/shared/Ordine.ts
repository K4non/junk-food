import { Prodotto } from "./Prodotto";

export class Ordine{
    constructor(private nomeRistorante:string, private prodotto:Prodotto, private quantitaProdotto:number){
        
    }

    getNomeRistorante():string{
        return this.nomeRistorante;
    }

    getNomeProdotto():string{
        return this.prodotto.getNome();
    }

    getQuantitaProdotto():number{
        return this.quantitaProdotto;
    }
    
    calcolaPrezzoPerProdotto():number{
        return this.prodotto.getPrezzo() * this.quantitaProdotto;
    }

    updateQuantita(num:number):void{
        this.quantitaProdotto+=num;
    }
}