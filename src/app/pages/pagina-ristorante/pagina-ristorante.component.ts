import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EntryDialogComponent } from '../../entry-components/entry-dialog/entry-dialog.component';

@Component({
  selector: 'app-pagina-ristorante',
  templateUrl: './pagina-ristorante.component.html',
  styleUrls: ['./pagina-ristorante.component.scss']
})
export class PaginaRistoranteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    //const dialogRef = this.dialog.open(EntryDialogComponent);
    
    this.dialog.open(EntryDialogComponent, {
      data: {
        animal: 'gatto'
      }
    });
  }
}
