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

    getQuantitaProdotto(){
        return this.quantitaProdotto;
    }
    
    calcolaPrezzoPerProdotto(){
        return this.prodotto.getPrezzo() * this.quantitaProdotto;
    }

    updateQuantita(num:number):void{
        this.quantitaProdotto+=num;
    }
}