import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarModelComponent } from '../../components/car-model/car-model.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CarModelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
