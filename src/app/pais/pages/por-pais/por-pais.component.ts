import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      },
    `
  ]
})
export class PorPaisComponent {
  public termino:string = "";
  public hayError: boolean = false;
  public mostrarSugerencia: boolean = false;
  public paises: Country[] = []
  public paisesSugeridos: Country[] = [];
  constructor(private paisService:PaisService) { }

  public buscar( termino: string): void{
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = false;
    if(termino === ''){
      this.mostrarSugerencia = false
      return;}
    this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.paises = paises;
      console.log('paises', this.paises)
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
  }

sugerencia( termino: string){
  this.hayError = false;
  this.termino = termino;
  this.mostrarSugerencia = true;
  if(termino === ''){
    this.mostrarSugerencia = false;
    return;}
  this.paisService.buscarPais(termino).subscribe( paises => {
    this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = [];
  });
}

buscarSugerido(termino: string){
  this.buscar(termino);
}
}
