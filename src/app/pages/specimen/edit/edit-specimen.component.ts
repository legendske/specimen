import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Specimen } from 'src/app/shared/models/specimen.model';

@Component({
  selector: 'app-edit-specimen',
  templateUrl: './edit-specimen.component.html',
  styleUrls: ['./edit-specimen.component.scss']
})
export class EditSpecimenComponent implements OnInit {
  @Input() specimen: Specimen | undefined;

  constructor(public dialogRef: MatDialogRef<EditSpecimenComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {  }

  form: FormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    status: new FormControl(this.data.status, Validators.required),
    subject: new FormControl(this.data.subject, Validators.required),
    note: new FormControl(this.data.note),
    type: new FormControl(this.data.type, Validators.required),
    collector: new FormControl(this.data.collector, Validators.required),
    collectedDateTime: new FormControl(this.data.collectedDateTime, Validators.required),
    receivedTime: new FormControl(this.data.receivedTime),
  });

}
