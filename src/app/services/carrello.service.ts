import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrello } from '../shared/Carrello';
import { Ordine } from '../shared/Ordine';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private ordiniCarrello:Carrello = new Carrello();
  private carrello = new BehaviorSubject<Carrello>(new Carrello);
 
  $carrello = this.carrello.asObservable();

  constructor() { }

  updateCarrello(nomeRistorante:string, arrayOrdiniDaDialog:Ordine[]):void{  
    this.ordiniCarrello.pushOrdini(nomeRistorante, arrayOrdiniDaDialog); 
    this.carrello.next(this.ordiniCarrello);
  }
}
