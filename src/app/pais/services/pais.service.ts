import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interfaces';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiURL:string = 'https://restcountries.eu/rest/v2';

  get httpParams(){
    return   new HttpParams()
    .set( 'fields', 'name;capital;alpha2Code;flag;population;languajes;alpha3Code' );
  }
  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]>{

    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
      // .pipe(
      //   catchError( error => of([]))
      // )
  }

  buscarPorCapital( termino:string ): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorCodigo( id:string): Observable<Country>{
    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion( region: string): Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
}
