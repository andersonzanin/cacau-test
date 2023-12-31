import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private authService: AuthService) {}
  title = 'cacaushow-teste';

  isLoggedIn(): boolean {
    return this.authService.isLoggenIn()
  }

  logout(): void {
    this.authService.logout()
  }
}
