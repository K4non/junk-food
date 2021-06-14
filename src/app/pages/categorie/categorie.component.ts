import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EntryDialogComponent } from 'src/app/entry-components/entry-dialog/entry-dialog.component';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  openDialog() {
      this.dialog.open(EntryDialogComponent, {
        data: {
          animal: 'panda'
        }
      });
  }
  

  ngOnInit(): void {
  }

}
