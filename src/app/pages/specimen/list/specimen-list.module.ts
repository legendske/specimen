import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SpecimenListComponent } from './specimen-list.component';
import { SpecimenListRoutingModule } from './specimen-list-routing.module';
import { SpecimenCardModule } from '../card/specimen-card.module';
import { AddSpecimenModule } from '../add/add-specimen.module';

@NgModule({
  declarations: [SpecimenListComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    ContainerModule,
    SpecimenCardModule,
    ContainerModule,
    SpecimenListRoutingModule,
    AddSpecimenModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecimenListModule { }
