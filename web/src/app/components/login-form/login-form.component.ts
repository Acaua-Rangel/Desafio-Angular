import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../dto/user.dto';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.userIsSaved());
  }

  messageError(show: boolean): void {
    const messsageError = document.getElementById('message-error') as HTMLElement;
    messsageError.style.display = `${show ? 'block' : 'none'}`;
  };

  saveUser(user: User): void {
    localStorage.setItem("id", user.id.toString());
    localStorage.setItem("nome", user.nome);
    localStorage.setItem("email", user.email);
  }

  userIsSaved(): boolean {
    const id = localStorage.getItem("id");
    const nome = localStorage.getItem("nome");
    const email = localStorage.getItem("email");

    if (id && nome && email) {
      return true;
    }
    return false;
  }

  submit(event: Event): void {
    event.preventDefault();

    const login = (<HTMLInputElement>document.getElementById('login')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;

    const body = {
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
      },
      error: (err) => this.messageError(true)
    });
  }
  
}
