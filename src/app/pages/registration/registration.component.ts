import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent{
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  alertMessage = '';
  alertsList: any = {
    user: () => 'Incorrect Email or Passowrd.',
    server: () => 'The service is not available.',
    false: () => ''
  };

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.registration();
  }

  error = false;

  constructor(private router: Router, private authService: AuthService) { }

  registration(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService.registrate(this.form.value.email, this.form.value.password, this.form.value.username).then(
      result => {
        console.log(result);
        this.router.navigateByUrl('/login');
      },
      (error) => {
        this.alertMessage = (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')
          ? this.alertsList.user() : this.alertsList.server();
      }
    );
  }
}
