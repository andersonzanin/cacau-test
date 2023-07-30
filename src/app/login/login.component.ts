import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor (private authService:  AuthService, private router: Router) {}

  async onSubmit() {
    const request = await this.authService.login(this.username, this.password)
    this.authService.setToken(request.token)
    this.router.navigate(['/products'])    
  }

}
