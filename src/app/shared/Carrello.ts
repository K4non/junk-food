export class Carrello{
    strutturaOrdini:any[];
    constructor(){
        this.strutturaOrdini = [];
    }

    pushOrdini(ordini:any):void{
        this.strutturaOrdini.push(ordini);
    }

    visualCarrello():void{
        this.strutturaOrdini.forEach(element => {
            console.log(element.getNomeRistorante() + " | " + element.getNomeProdotto() + " | " + element.calcolaPrezzoPerProdotto());
        });
    }
}