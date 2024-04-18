import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../../../service/service.service';
import { ArteDiseno } from '../../../interface/arteDiseno.interface';

@Component({
  selector: 'app-arte-diseno',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './arte-diseno.component.html',
  styleUrl: './arte-diseno.component.css'
})
export class ArteDisenoComponent {
	items$: ArteDiseno[] = [];




	constructor(private servicio: ServiceService) { }

	ngOnInit() {
		this.servicio.getDatosArteDiseno().subscribe((data: ArteDiseno[]) => {
		  console.log(data);
		  this.items$ = data;
		});
	  }
}
