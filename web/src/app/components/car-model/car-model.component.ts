import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-car-model',
  imports: [CardComponent],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.css'
})
export class CarModelComponent implements OnInit {
  constructor(private http: HttpClient) {}
  
  sells = "--";
  conects = "--";
  updates = "--";

  ngOnInit(): void {
    this.fetchData();
  }


  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    if (selectedValue) {
      this.fetchData();
    }
  }

  fetchData() {
    // Substitua pela sua URL de API
    const apiUrl = `http://localhost:3001/vehicles`;
    
    this.http.get(apiUrl).subscribe({
      next: (response) => {
        console.log('Dados recebidos:', response);
        // Faça algo com os dados aqui
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      }
    });
  }
}
