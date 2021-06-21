import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {RistorantiService} from '../../services/ristoranti.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  text = new FormControl('');

  constructor(private router:Router, private serviceRistoranti: RistorantiService) { }
  
  ngOnInit(): void {
    // this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value));
    this.serviceRistoranti.$getStringaSearch.subscribe(msj =>{ 
      this.text.setValue(msj);
    });
  }

  updateString(){
    this.serviceRistoranti.updateStringaSearch(this.text.value);
  }

  resetText() {
    this.text.setValue("");
    this.serviceRistoranti.updateStringaSearch(this.text.value);
  }

}
