import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../../service/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sistema-juego',
  standalone: true,
  imports: [NgbCollapseModule, CommonModule, HttpClientModule],
  templateUrl: './sistema-juego.component.html',
  styleUrl: './sistema-juego.component.css'
})
export class SistemaJuegoComponent {
  isCollapsed = true;
  images = [
            '',
            './../../../../assets/images/sistemaJuego/combate.jpg', 
            './../../../../assets/images/sistemaJuego/exploracion.png',
            './../../../../assets/images/sistemaJuego/narrativa.jpg',
            './../../../../assets/images/sistemaJuego/artesania.jpg',
            './../../../../assets/images/sistemaJuego/interacciones.jpg',
            './../../../../assets/images/sistemaJuego/misiones.jpg',];
  sistema: any;
  sistemaId = 1;
  selectedImage = 1;
  isCollapsedSelected = true;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getSistemas(this.sistemaId).subscribe((data: any) => {
      console.log(data);
      this.sistema = data;
    });
  }

  changeSistema(id: number) {
    // Obtener los datos de el sistema especifco seleccionado
    this.sistemaId = id;
    this.selectedImage = this.sistemaId;
    this.service.getSistemas(this.sistemaId).subscribe((data: any) => {
      console.log(data);
      this.sistema = data;
    });
  }
}
