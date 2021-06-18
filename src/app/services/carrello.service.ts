import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello = new BehaviorSubject<any>('');

  // getSubject () : Observable<string> {
  //   return this.stringaSearch;
  // }
 
  $carrello = this.carrello;  //$ per definire un subject

  constructor() { }

  updateCarrello(str:any){
    this.carrello.next(str); //value = ''; -> value = str
  }
}
