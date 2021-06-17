import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Prodotto } from 'src/app/shared/Prodotto';



@Component({
  selector: 'app-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss']
})
export class EntryDialogComponent implements OnInit {
  listaProdotti: Prodotto[];
  counterN: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public menuRistorante: Prodotto[]) {
    this.listaProdotti = this.menuRistorante;
  }

  ngOnInit(): void { }

  increase() {
    this.counterN++;
  }

  decrease() {
    this.counterN--;
    if (this.counterN < 0) {
      this.counterN = 0;
    }
    return this.counterN;
  }

}
