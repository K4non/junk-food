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
  ristorante:Ristorante;
  myMapProdottoQuantita = new Map();

  constructor(@Inject(MAT_DIALOG_DATA) public risto: Ristorante, private carrelloService: CarrelloService) {
    this.ristorante = risto;
    this.listaProdotti = this.ristorante.getMenu();
    
    
  }

  ngOnInit(): void { }

  increase(i:Prodotto) {
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP:number = this.myMapProdottoQuantita.get(i.getId());
      countP++;
      this.myMapProdottoQuantita.set(i.getId(), countP);

    }else{
      console.log("-->" + this.myMapProdottoQuantita.get(i.getId()));
      this.myMapProdottoQuantita.set(i.getId(), 1);
    }
    
  }

  decrease(i:Prodotto) {
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP = this.myMapProdottoQuantita.get(i.getId());
      if(countP > 0){
        countP--;
        if(countP == 0){
          this.myMapProdottoQuantita.delete(i.getId());
        }else{
          this.myMapProdottoQuantita.set(i.getId(), countP);
        }
      }
    }
  }

  aggiungiOrdine(){

    if(this.myMapProdottoQuantita.size != 0){
      this.listaProdotti.forEach(prodotto => {
        if(this.myMapProdottoQuantita.has(prodotto.getId())){
          this.ordine.push(new Ordine(this.ristorante.getNome(), prodotto, this.myMapProdottoQuantita.get(prodotto.getId())));
      }
      });

      this.carrelloService.updateCarrello(this.ristorante.getNome(), this.ordine);
    }
    
  }
}
