import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formPassword: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    passwordAgain: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  formUsername: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  formEmail: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  changePassword(): void {
    if (this.formPassword.invalid) {
      return;
    }
    this.authService.newPassword(this.formPassword.value.password);
    this._snackBar.open("Password is changed!", "Close",{
      duration: 5000,
    });
  }

  changeUsername(): any {
    if (this.formUsername.invalid) {
      return;
    }
    this.authService.updateCurrentUserName(this.formUsername.value.username);
    this._snackBar.open("Username is changed!", "Close",{
      duration: 3000,
    });
  }

  changeEmail(): void {
    if (this.formEmail.invalid) {
      return;
    }
    this.authService.newEmail(this.formEmail.value.email);
    this._snackBar.open("Email is changed!", "Close",{
      duration: 3000,
    });
  }

}
