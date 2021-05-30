import { Router } from '@angular/router';
import { Specimen } from './../../../shared/models/specimen.model';
import { FbBaseService } from '../../../services/fb-base.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { AddSpecimenComponent } from '../add/add.specimen.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-specimen-list',
  templateUrl: './specimen-list.component.html',
  styleUrls: ['./specimen-list.component.scss']
})
export class SpecimenListComponent implements OnInit{
  title = 'Specimens';
  list: Observable<Specimen[]> | null = null;
  myControl = new FormControl();
  options: string[] = ['Not working'];
  filteredOptions: Observable<string[]> | null = null;

  constructor(private service: FbBaseService<Specimen>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      debounceTime(250),
      map(value => this._filter(value))
    );
  }
  

  get(): void {
    this.list = this.service.get('Specimens');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSpecimenComponent, {});
    dialogRef.afterClosed().subscribe((specimen: Specimen) => {
      console.log(specimen);
      if (specimen?.subject) {
        this.service.add('Specimens', specimen);
      }
    }, err => {
      console.warn(err);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
