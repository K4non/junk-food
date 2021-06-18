import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prodotto } from 'src/app/shared/Prodotto';
import { Ordine } from 'src/app/shared/Ordine';
import { Ristorante } from 'src/app/shared/Ristorante';
import { Carrello } from 'src/app/shared/Carrello';
import { CarrelloService } from 'src/app/services/carrello.service';



@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {
  listaProdotti: Prodotto[];
  carrello : Carrello;
  counterN: number = 0;
  ristorante:Ristorante;
  myMapProdottoQuantita = new Map();

  constructor(@Inject(MAT_DIALOG_DATA) public risto: Ristorante, private carrelloService: CarrelloService) {
    this.ristorante = risto;
    this.listaProdotti = this.ristorante.getMenu();
    this.carrello = new Carrello();
  }

  ngOnInit(): void { }

  increase(i:Prodotto) {
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP = this.myMapProdottoQuantita.get(i.getId());
      countP++;
      console.log(countP);
      this.myMapProdottoQuantita.set(i.getId(), countP);

    }else{
      this.myMapProdottoQuantita.set(i.getId(), 1);
    }
  }

  decrease(i:Prodotto) {
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP = this.myMapProdottoQuantita.get(i.getId());
      if(countP > 0){
        countP--;
        console.log(countP);
        this.myMapProdottoQuantita.set(i.getId(), countP);
      }
    }
  }

  aggiungiOrdine(){
    this.myMapProdottoQuantita.forEach((value:any, key:any) => {
      // ordini:Ordine = new Ordine(this.ristorante.getNome(), );
      for(let i = 0; i < this.listaProdotti.length; i++){
        if(this.myMapProdottoQuantita.has(this.listaProdotti[i].getId())){
            this.carrello.pushOrdini(new Ordine(this.ristorante.getNome(), this.listaProdotti[i], value));
        }
      }
    });

    this.carrelloService.updateCarrello(this.carrello);
    console.log("inviato");
  }
}
