import { Component, OnInit } from '@angular/core';
import { RistorantiService } from 'src/app/services/ristoranti.service';
import { Router } from '@angular/router';
import { allRestaurants } from '../../shared/food';
import { Ristorante } from 'src/app/shared/Ristorante';
import { MatDialog } from '@angular/material/dialog';
import { EntryDialogComponent } from 'src/app/entry-components/entry-dialog/entry-dialog.component';
import { Prodotto } from 'src/app/shared/Prodotto';

@Component({
  selector: 'app-restaurant-viewer',
  templateUrl: './restaurant-viewer.component.html',
  styleUrls: ['./restaurant-viewer.component.scss']
})
export class RestaurantViewerComponent implements OnInit {

  //Il ! permette di evitare di inizializzarla nel costruttore o direttamente qua
  foodList!: Ristorante[];   // = allRestaurants.getRistoranti()

  constructor(private router: Router, private serviceRistoranti: RistorantiService, public dialog: MatDialog) { }

  str: string = '';

  ngOnInit(): void {

    this.foodList = allRestaurants.getRistoranti()

    //Sottoscrizione all'observable BehaviorSubject proveniente dal servizio ristoranti 
    this.serviceRistoranti.$getStringaSearch.subscribe(msj => {
      this.str = msj;
    });
  }


  openDialog(ristorante: Ristorante) {
    this.dialog.open(EntryDialogComponent, {
      data: ristorante
    });
  }

}
