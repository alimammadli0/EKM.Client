import { Component } from '@angular/core';
import { LoginComponent } from '../../../../shared/components/login/login.component';
import { LoginRequest } from '../../../../shared/models/LoginRequest';
import { catchError, tap, throwError } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './student-login-page.component.html',
  styleUrls: ['./student-login-page.component.css']
})
export class StudentLoginPageComponent {

  constructor(private authService: AuthService, private router: Router){}

  handleLogin(credentials: { email: string, password: string }): void {
    const loginRequest = new LoginRequest(credentials.email, credentials.password);

      this.authService.login(loginRequest, 'student').pipe(
        tap(response => {
          this.authService.setEmail(loginRequest.email);
          this.router.navigate(['/student']);
        }),
        catchError(error => {
          window.alert(`Giriş başarısız`);
          return throwError(() => error);
        })
      ).subscribe();
  }
}
