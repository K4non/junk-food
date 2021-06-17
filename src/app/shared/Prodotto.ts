

export class Prodotto {

    constructor(private id: number, private nome: string, private prezzo: number, private ingredienti: string[]) {

    }

    getId() {
        return this.id;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getPrezzo() {
        return this.prezzo;
    }

    setPrezzo(prezzo: number) {
        this.prezzo = prezzo;
    }

    getIngredienti() {
        return this.ingredienti;
    }

    setIngredienti(ingredienti: string[]) {
        this.ingredienti = ingredienti;
    }

    // stringaIngredienti(): string {
    //     let str: string = '';
    //     for (let i = 0; i < this.ingredienti.length - 1; i++) {
    //         str = str + " " + this.ingredienti[i] + ", ";
    //     }
    //     return str + " " + this.ingredienti[this.ingredienti.length - 1];
    // }

}