import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../../service/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-historia-trama',
  standalone: true,
  imports: [NgbCollapseModule, CommonModule, HttpClientModule],
  templateUrl: './historia-trama.component.html',
  styleUrl: './historia-trama.component.css'
})
export class HistoriaTramaComponent implements OnInit {
  isCollapsed = true;
  images = [
            '',
            './../../../../assets/images/historia/the-witcher-2007-cover.png', 
            './../../../../assets/images/historia/the_witcher_2_cover.webp',
            './../../../../assets/images/historia/the_witcher_3_cover.webp',
            './../../../../assets/images/historia/thronebreaker_cover.jpeg',];
  historia: any;
  historiaId = 1;
  selectedImage = 1;
  isCollapsedSelected = true;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getHistoria(this.historiaId).subscribe((data: any) => {
      console.log(data);
      this.historia = data;
    });
  }

  changeHistoria(id: number) {
    // Obtener los datos de la historia
    this.historiaId = id;
    this.selectedImage = this.historiaId;
    this.service.getHistoria(this.historiaId).subscribe((data: any) => {
      console.log(data);
      this.historia = data;
    });
  }
}
