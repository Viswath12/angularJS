import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngular app';
  private isLoggedIn: Boolean;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.user.subscribe((user) => {
      if(user == null) { 
        console.log('logout');
        this.isLoggedIn = false;
        this.user_email = '';
        this.router.navigate(['login']);
      }
      else {
        console.log('logged in');
        this.isLoggedIn = true;
        this.user_email = user.email;
        this.router.navigate(['']);
      }
    });
  }



}
