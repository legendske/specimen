import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecimenCardComponent } from './specimen-card.component';
import { EditSpecimenModule } from '../edit/edit-specimen.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [SpecimenCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule, EditSpecimenModule, MatExpansionModule
  ],
  exports: [SpecimenCardComponent]
})
export class SpecimenCardModule { }
