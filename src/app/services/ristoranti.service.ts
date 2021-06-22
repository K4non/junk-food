import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RistorantiService {
  
  private stringaSearch = new BehaviorSubject<string>('');
 
  $getStringaSearch = this.stringaSearch;  //$ per definire un subject

  constructor() { }

  updateStringaSearch(str:string):void{
    this.stringaSearch.next(str); //value = ''; -> value = str
  }
}
