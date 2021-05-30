import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CATEGORIES } from 'src/app/shared/database/category.database';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories = CATEGORIES;
  uData = [];
  
  constructor(private router: Router, private authService: AuthService) {
    this.authService.getUser().then((res: never[]) => this.uData = res)
   }

   ngOnInit(): void {
    this.authService.getUser().then((res: never[]) => this.uData = res)
    console.log(this.uData[0]);
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
