import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/services/carrello.service';
import { Carrello } from 'src/app/shared/Carrello';
import { Ordine } from 'src/app/shared/Ordine';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  carrello!:Carrello;
  struttura!:Map<string, Ordine[]>;
  constructor(private carrelloService:CarrelloService) { }

  ngOnInit(): void {
    this.carrelloService.$carrello.subscribe(carrelloDalServizio => {
      this.carrello = carrelloDalServizio;
      this.struttura = carrelloDalServizio.getStruttura();
    });
  }
}
