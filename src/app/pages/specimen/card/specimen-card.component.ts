import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Specimen } from 'src/app/shared/models/specimen.model';
import { EditSpecimenComponent } from '../edit/edit-specimen.component';

@Component({
  selector: 'app-specimen-card',
  templateUrl: './specimen-card.component.html',
  styleUrls: ['./specimen-card.component.scss']
})
export class SpecimenCardComponent implements OnInit {
  @Input() specimen?: Specimen;
  panelOpenState = false;

  constructor(private dialog: MatDialog, private service: FbBaseService<Specimen>) { }

  ngOnInit(): void {
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditSpecimenComponent, {data: this.specimen});
    dialogRef.afterClosed().subscribe((specimenEdited: Specimen) => {
      console.log(specimenEdited);
      if (this.specimen?.id) {
        this.service.update("Specimens", this.specimen.id, specimenEdited);
      }
    }, err => {
      console.warn(err);
    });
  }

  deleteSpecimen(): void {
    if (this.specimen?.id) {
      this.service.delete("Specimens", this.specimen.id);
    }
  }

}
