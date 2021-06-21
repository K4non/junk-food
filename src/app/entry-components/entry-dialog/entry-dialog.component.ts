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
  ordine : Ordine[] = [];
  counterN: number = 2;
  ristorante:Ristorante;
  myMapProdottoQuantita = new Map();

  constructor(@Inject(MAT_DIALOG_DATA) public risto: Ristorante, private carrelloService: CarrelloService) {
    this.ristorante = risto;
    this.listaProdotti = this.ristorante.getMenu();
    
    
  }

  ngOnInit(): void { }

  increase(i:Prodotto) {
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP = this.myMapProdottoQuantita.get(i.getId());
      countP++;
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
        this.myMapProdottoQuantita.set(i.getId(), countP);
      }
    }
  }

  aggiungiOrdine(){
    for(let i = 0; i < this.listaProdotti.length; i++){
      if(this.myMapProdottoQuantita.has(this.listaProdotti[i].getId())){
          this.ordine.push(new Ordine(this.ristorante.getNome(), this.listaProdotti[i], this.myMapProdottoQuantita.get(this.listaProdotti[i].getId())));
      }
    }
    this.carrelloService.updateCarrello(this.ristorante.getNome(), this.ordine);
  }
}
