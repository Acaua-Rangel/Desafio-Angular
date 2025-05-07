import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDTO, User } from '../../dto/user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private http: HttpClient, private router: Router) {}

  private messageError(show: boolean): void {
    const messsageError = document.getElementById('message-error') as HTMLElement;
    messsageError.style.display = `${show ? 'block' : 'none'}`;
  };

  private saveUser(user: User): void {
    sessionStorage.setItem("id", user.id.toString());
    sessionStorage.setItem("nome", user.nome);
    sessionStorage.setItem("email", user.email);
  }

  submit(event: Event): void {
    event.preventDefault();

    const login = (<HTMLInputElement>document.getElementById('login')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    const body: LoginDTO = {
      nome: login,
      senha: password,
    };

    this.http.post('http://localhost:3001/login', body, {
      headers: new HttpHeaders({ 'Accept': 'application/json' }),
      withCredentials: false
    }).subscribe({
      next: (res) => {
        this.messageError(false);
        this.saveUser(res as User);
        console.log(res);
        this.router.navigate(['/']);
      },
      error: (err) => this.messageError(true)
    });
  }
  
}
