import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.intrface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams( ){
    return new HttpParams()
    .set ('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }
  buscarPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Pais[]>(url,{params: this.httpParams});
  }
  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Pais>(url);
  }
  buscarRegion(region: String): Observable<Pais[]> {



    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Pais[]>(url,{params: this.httpParams});
  }
}
