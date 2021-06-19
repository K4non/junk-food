

export class Prodotto {

    constructor(private id: number, private nome: string, private prezzo: number, private ingredienti: string[]) {

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

    getPrezzo():number{
        return this.prezzo;
    }

    setPrezzo(prezzo: number):void{
        this.prezzo = prezzo;
    }

    getIngredienti():string[]{
        return this.ingredienti;
    }

    setIngredienti(ingredienti: string[]):void{
        this.ingredienti = ingredienti;
    }
}