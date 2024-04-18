import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mounstro } from '../interface/mounstro.interface';
import { ArteDiseno } from '../interface/arteDiseno.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'https://localhost:7179';

  constructor(private http: HttpClient) { }

  //Traer datos de los personajes
  getDatosPersonajes() {

    const options = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('param1', 'value1').set('param2', 'value2')
    };

    return this.http.get(`${this.apiUrl}/personajes`, options);
  }

  //Traer datos de la historia por ID
  getHistoria(id: number): Observable<any> {
    const url = `${this.apiUrl}/historias/${id}`;
    return this.http.get(url);
  }

  //Traer datos de las localizaciones
  getDatosLocalizaciones() {

    const options = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('param1', 'value1').set('param2', 'value2')
    };

    return this.http.get(`${this.apiUrl}/localizaciones`, options);
  }

  //Traer datos de las bestias
  getDatosBestiario() {

    const options = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('param1', 'value1').set('param2', 'value2')
    };

    return this.http.get<Mounstro[]>(`${this.apiUrl}/bestiario`, options);
  }

  //Traer bestia por ID
  getBestia(id: number): Observable<any> {
    const url = `${this.apiUrl}/bestiario/${id}`;
    return this.http.get(url);
  }

  //Traer datos de los sistemas por ID
  getSistemas(id: number): Observable<any> {
    const url = `${this.apiUrl}/sistema/${id}`;
    return this.http.get(url);
  }

  //Traer los datos de arte y diseño por ID
  getArteDiseno(id: number): Observable<any> {
    const url = `${this.apiUrl}/arteDiseno/${id}`;
    return this.http.get(url);
  }

  //Traer todos los datos de arte y diseño
  getDatosArteDiseno() {

    const options = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('param1', 'value1').set('param2', 'value2')
    };

    return this.http.get<ArteDiseno[]>(`${this.apiUrl}/arteDiseno`, options);
  }

  //traer datos de las curiosidades
  getCuriosidades() {

    const options = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams().set('param1', 'value1').set('param2', 'value2')
    };

    return this.http.get(`${this.apiUrl}/curiosidades`, options);
  }

}
