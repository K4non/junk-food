import { Pipe, PipeTransform } from '@angular/core';
import { Ristorante } from '../shared/Ristorante';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //filtra la lista passata come parametro in base alla stringa passata come parametro
  transform(list: Ristorante[], text: string): Ristorante[] {
    if(!text){
      return list;
    }
    let arr1 = list.filter(food => food.getNome().toUpperCase().includes(text.toUpperCase()))
    let arr2 = list.filter(food => food.getCucina().toUpperCase().includes(text.toUpperCase()));

    //Unione di due array, escludendo i duplicati
    const mySet = new Set([
      ...arr1,
      ...arr2
    ]);
    return Array.from(mySet);  //L'insieme filtrato viene tradotto in un array e ritornato
  }
  

}
