import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prodotto } from 'src/app/shared/Prodotto';
import { Ristorante } from 'src/app/shared/Ristorante';



@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {
  listaProdotti: Prodotto[];
  counterN: number = 0;
  ristorante:Ristorante;
  myMapProdottoQuantita = new Map();

  constructor(@Inject(MAT_DIALOG_DATA) public risto: Ristorante) {
    this.ristorante = risto;
    this.listaProdotti = this.ristorante.getMenu();
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
    
    this.counterN = this.myMapProdottoQuantita.get(i.getId());
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
  
    this.counterN = this.myMapProdottoQuantita.get(i.getId());
  }

}
