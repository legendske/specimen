import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-specimen',
  templateUrl: './add-specimen.component.html',
  styleUrls: ['./add-specimen.component.scss']
})
export class AddSpecimenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSpecimenComponent>) {}

  form: FormGroup = new FormGroup({
    id: new FormControl(Guid.create().toString),
    status: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    note: new FormControl(''),
    type: new FormControl('', Validators.required),
    collector: new FormControl('', Validators.required),
    collectedDateTime: new FormControl('', Validators.required),
    receivedTime: new FormControl(''),
  });

  ngOnInit(): void {
  }
}
