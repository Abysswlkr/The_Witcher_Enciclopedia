import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-curiosidades',
  standalone: true,
  imports: [CommonModule, HttpClientModule,],
  templateUrl: './curiosidades.component.html',
  styleUrl: './curiosidades.component.css'
})
export class CuriosidadesComponent {
  curiosidades: any;

  constructor(private service: ServiceService) {
    this.service.getCuriosidades().subscribe((data: any) => {
      console.log(data);
      this.curiosidades = data;
    });
   }
}
