import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrello } from '../shared/Carrello';
import { Ordine } from '../shared/Ordine';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private ordiniCarrello:Carrello = new Carrello();
  private carrello = new BehaviorSubject<any>('');

  // getSubject () : Observable<string> {
  //   return this.stringaSearch;
  // }
 
  $carrello = this.carrello.asObservable();  //$ per definire un subject

  constructor() { }

  updateCarrello(risto:string, arrayOrdiniDaDialog:Ordine[]){  
  
    this.ordiniCarrello.pushOrdini(risto, arrayOrdiniDaDialog); 
  

    this.carrello.next(this.ordiniCarrello); //value = ''; -> value = str
  }
}
