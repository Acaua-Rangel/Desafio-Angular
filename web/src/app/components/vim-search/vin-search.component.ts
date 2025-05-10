import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vinDTO } from '../../dto/vin.dto';

@Component({
  selector: 'app-vin-search',
  imports: [],
  templateUrl: './vin-search.component.html',
  styleUrl: './vin-search.component.css'
})
export class VinSearchComponent {
  constructor(private http: HttpClient) {}
  data: vinDTO = {
    "id": 0,
    "odometro": 0,
    "nivelCombustivel": 0,
    "status": "off",
    "lat": 0,
    "long": 0
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLSelectElement;
    const inputValue = inputElement.value;
    
    if (inputValue) {
      this.fetchData(inputValue);
    }
  }

  private fetchData(vin: string) {
    // Substitua pela sua URL de API
    const apiUrl = `http://localhost:3001/vehicleData`;
    
    this.http.post<vinDTO>(apiUrl, {"vin": vin}).subscribe({
      next: (response) => {
        this.data = response;
        console.log(this.data);
      },
      error: (err) => {
        console.error('Erro na requisição:', err);
      }
    });
  }

  get odometer():string {
    return this.data.odometro.toString();
  }

  get fuel():string {
    return this.data.nivelCombustivel.toString();
  }

  get status():string {
    return this.data.status;
  }

  get lat():string {
    return this.data.lat.toString();
  }

  get long():string {
    return this.data.long.toString();
  }
}
