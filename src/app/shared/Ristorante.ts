import { Prodotto } from "./Prodotto";


export class Ristorante {
    constructor(private id: number, private nome: string, private cucina: string,
        private indirizzo: string, private menu: Prodotto[],
        private img: string) {
    }


    getId():number{
        return this.id;
    }

    getNome():string{
        return this.nome;
    }

    setNome(nome: string):void{
        this.nome = nome;
    }

    getCucina():string{
        return this.cucina;
    }

    setCucina(cucina: string):void{
        this.cucina = cucina;
    }

    getIndirizzo():string{
        return this.indirizzo;
    }

    setIndirizzo(indirizzo: string):void{
        this.indirizzo = indirizzo;
    }

    getMenu():Prodotto[]{
        return this.menu;
    }

    setMenu(menu: Prodotto[]):void{
        this.menu = menu;
    }

    getImg():string{
        return this.img;
    }

    setImg(img: string):void{
        this.img = img;
    }
}