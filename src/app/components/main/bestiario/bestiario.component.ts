import { AsyncPipe } from '@angular/common';
import { Component, PipeTransform } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs/operators';
import { ServiceService } from '../../../service/service.service';
import { Mounstro } from '../../../interface/mounstro.interface';


//Aqui se debe de poner la informacion de los mounstros
let Mounstros: Mounstro[] = []

function search (text: string): Mounstro[] {
	return Mounstros.filter((bestia) => {
		const term = text.toLowerCase();
		return (
			bestia.nombre.toLowerCase().includes(term) ||
			bestia.debilidades.includes(term) ||
			bestia.tacticasCombate.includes(term)
		);
	});
}

@Component({
  selector: 'app-bestiario',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule, NgbHighlight],
  templateUrl: './bestiario.component.html',
  styleUrl: './bestiario.component.css',
  providers: [],
})



export class BestiarioComponent {
	bestiario$: Mounstro[] = [];
	filter = new FormControl('', { nonNullable: true });



	constructor(private servicio: ServiceService) {
		this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text)),
		).subscribe((data: Mounstro[]) => {
			this.bestiario$ = data;
		});
	}

	ngOnInit() {
		this.servicio.getDatosBestiario().subscribe((data: Mounstro[]) => {
		  console.log(data);
		  this.bestiario$ = data;
		  Mounstros = data;
		});
	  }
}

