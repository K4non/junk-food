import { Ordine } from "./Ordine";

export class Carrello{
    strutturaOrdini:any;
    constructor(){
        this.strutturaOrdini = new Map();
    }

    pushOrdini(ristoranteNome:string, ordiniService:Ordine[]):void{
        let flag:boolean = false;
        if(this.strutturaOrdini.has(ristoranteNome)){
            let ordini:Ordine[] = this.strutturaOrdini.get(ristoranteNome);

            ordiniService.forEach(ordineAggiornato => {
                ordini.forEach(ordine => {
                    if(ordineAggiornato.getNomeProdotto() == ordine.getNomeProdotto()){
                        ordine.updateQuantita(ordineAggiornato.getQuantitaProdotto());
                        flag = true;
                    }
                });
                if(flag == false){
                    ordini.push(ordineAggiornato);
                }else{
                    flag = false;
                }
            });

        }else{
            this.strutturaOrdini.set(ristoranteNome, ordiniService);
        }
    }

    visualCarrello():void{
        this.strutturaOrdini.forEach((value:Ordine[], key:any) => {
            console.log("key->" + key);
            value.forEach(ordini => {
                console.log("->" + ordini.getNomeRistorante() + " | " + ordini.getNomeProdotto() + " | " + ordini.calcolaPrezzoPerProdotto() + " | " + ordini.getQuantitaProdotto());
            });
        });
    }

    getStruttura():any{
        return this.strutturaOrdini;
    }
}