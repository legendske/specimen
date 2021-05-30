import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatCardModule } from '@angular/material/card';
import { ProfileRoutingModule } from './profile-routing.module';
import { NavModule } from '../nav/nav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,ContainerModule,MatCardModule,ProfileRoutingModule,NavModule,FormsModule,ReactiveFormsModule,MatInputModule,MatSnackBarModule
  ],
  exports: 
  [ProfileComponent]
})
export class ProfileModule { }
