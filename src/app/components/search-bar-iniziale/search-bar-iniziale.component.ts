import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RistorantiService } from 'src/app/services/ristoranti.service';

@Component({
  selector: 'app-search-bar-iniziale',
  templateUrl: './search-bar-iniziale.component.html',
  styleUrls: ['./search-bar-iniziale.component.scss']
})
export class SearchBarInizialeComponent implements OnInit {

  text:FormControl = new FormControl('');

  constructor(private router:Router, private serviceRistoranti: RistorantiService) { }

  ngOnInit(): void {
  }

  updateString():void{
    console.log(this.text.value + "  da search component");
    this.serviceRistoranti.updateStringaSearch(this.text.value);
  }

  resetText():void{
    this.text.setValue("");
  }

}
