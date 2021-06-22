import { Ordine } from "./Ordine";

export class Carrello{
    private strutturaOrdini:any;
    constructor(){
        this.strutturaOrdini = new Map();
    }

    pushOrdini(ristoranteNome:string, ordiniService:Ordine[]):void{
        let flag:boolean = false;
        if(this.strutturaOrdini.has(ristoranteNome)){
            let vecchiOrdini:Ordine[] = this.strutturaOrdini.get(ristoranteNome);

            ordiniService.forEach(ordineAggiornato => {
                vecchiOrdini.forEach(ordine => {
                    if(ordineAggiornato.getNomeProdotto() == ordine.getNomeProdotto()){ //chiede se nella mappa quel piatto c'è già
                        ordine.updateQuantita(ordineAggiornato.getQuantitaProdotto());
                        flag = true;
                    }
                });

                //se il piatto non c'è negli ordini vecchi, allora aggiungilo
                if(flag == false){
                    vecchiOrdini.push(ordineAggiornato);
                }else{
                    flag = false;
                }
            });

        }else{
            this.strutturaOrdini.set(ristoranteNome, ordiniService);
        }
    }

    getStruttura():any{
        return this.strutturaOrdini;
    }
}