import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginRoutingModule } from './login-routing.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, LoginRoutingModule, MatCardModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  exports: [LoginComponent]
  
})
export class LoginModule { }

