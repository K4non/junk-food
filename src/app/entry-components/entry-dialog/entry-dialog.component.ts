import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prodotto } from 'src/app/shared/Prodotto';
import { Ordine } from 'src/app/shared/Ordine';
import { Ristorante } from 'src/app/shared/Ristorante';
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

  constructor(@Inject(MAT_DIALOG_DATA) public risto: Ristorante, private carrelloService: CarrelloService, public dialog: MatDialog) {
    this.ristorante = risto;
    this.listaProdotti = this.ristorante.getMenu();
    
    
  }

  ngOnInit(): void { }

  increase(i:Prodotto):void{
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP:number = this.myMapProdottoQuantita.get(i.getId());
      countP++;
      this.myMapProdottoQuantita.set(i.getId(), countP);

    }else{
      
      this.myMapProdottoQuantita.set(i.getId(), 1);
    }
    
  }

  decrease(i:Prodotto):void{
    if(this.myMapProdottoQuantita.has(i.getId())){
      let countP = this.myMapProdottoQuantita.get(i.getId());
      if(countP > 0){
        countP--;
        if(countP == 0){  //se il valore della chiave i.getId() è 0 -> allora cancella il prodotto dalla mappa
          this.myMapProdottoQuantita.delete(i.getId());
        }else{
          this.myMapProdottoQuantita.set(i.getId(), countP);
        }
      }
    }
  }

  aggiungiOrdine():void{
    if(this.myMapProdottoQuantita.size != 0){
      this.listaProdotti.forEach(prodotto => {
        if(this.myMapProdottoQuantita.has(prodotto.getId())){
          this.ordine.push(new Ordine(this.ristorante.getNome(), prodotto, this.myMapProdottoQuantita.get(prodotto.getId())));
        }
      });

      this.carrelloService.updateCarrello(this.ristorante.getNome(), this.ordine);
      this.dialog.closeAll();
    }
    
  }
}
