import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  carrello!:any;
  
  constructor(private carrelloService:CarrelloService) { }

  ngOnInit(): void {
    this.carrelloService.$carrello.subscribe(tr => {
      this.carrello = tr;
      
    });

    
  }


  chiama(){
    this.carrello.visualCarrello();
  }
}
