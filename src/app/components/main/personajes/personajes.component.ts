import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgbCarouselModule, HttpClientModule, CommonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  providers: [NgbCarouselConfig],
})

export class PersonajesComponent implements OnInit{
  images = ['./../../../../assets/images/personajes/Geralt.jpg', 
            './../../../../assets/images/personajes/yennerfer.jpg',
            './../../../../assets/images/personajes/Cirilla.png',
            './../../../../assets/images/personajes/Triss.jpg',
            './../../../../assets/images/personajes/Dandelion.png',
            './../../../../assets/images/personajes/Emhyr.png'];
  personajes: { nombre: string, descripcion: string, habilidades: string, relaciones: string }[] = [];

  constructor(config: NgbCarouselConfig, private servicio: ServiceService) {
    config.interval = 30000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.servicio.getDatosPersonajes().subscribe((data: any) => {
      console.log(data);
      this.personajes = data;
    });
  }

}
