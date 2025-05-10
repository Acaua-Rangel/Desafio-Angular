import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarModelComponent } from '../../components/car-model/car-model.component';
import { VinSearchComponent } from '../../components/vim-search/vin-search.component';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, CarModelComponent, VinSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
