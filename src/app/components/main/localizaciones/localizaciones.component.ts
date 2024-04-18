import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../../service/service.service';

@Component({
  selector: 'app-localizaciones',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './localizaciones.component.html',
  styleUrl: './localizaciones.component.css',
  providers: [NgbCarouselConfig],
})
export class LocalizacionesComponent {
  images = ['./../../../../assets/images/localizaciones/kaer_morhen.jpg', 
  './../../../../assets/images/localizaciones/vizima.png',
  './../../../../assets/images/localizaciones/Novigrado.png',
  './../../../../assets/images/localizaciones/Toussaint.jpg',
  './../../../../assets/images/localizaciones/Skellige.jpg',
  './../../../../assets/images/localizaciones/Oxenfurt.png'];
  localizaciones: { nombre: string, descripcion: string, reino: string }[] = [];
  
  constructor(config: NgbCarouselConfig, private servicio: ServiceService) {
    config.interval = 30000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.servicio.getDatosLocalizaciones().subscribe((data: any) => {
      console.log(data);
      this.localizaciones = data;
    });
  }
}
