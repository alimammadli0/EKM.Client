import { Component } from '@angular/core';
import { LoginComponent } from '../../../../shared/components/login/login.component';
import { TeacherLoginService } from '../../services/teacher-login.service';
import { LoginRequest } from '../../../../shared/models/LoginRequest';


@Component({
  selector: 'app-teacher-login-page',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './teacher-login-page.component.html',
  styleUrls: ['./teacher-login-page.component.css']
})
export class TeacherLoginPageComponent {
  constructor(private loginService: TeacherLoginService){}
  
    handleLogin(credentials: { email: string, password: string }): void {
      const loginRequest = new LoginRequest(credentials.email, credentials.password);
  
        this.loginService.login(loginRequest).subscribe(
          (response) => {
            window.alert(`Giriş başarılı: ${response}` );
          },
          (error) => {
            window.alert(`Giriş başarısız` );
          }
        );
    }
}
