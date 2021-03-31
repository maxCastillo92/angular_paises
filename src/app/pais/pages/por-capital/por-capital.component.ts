import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {
  public termino:string = "";
  public hayError: boolean = false;
  public capitales: Country[] = [];

  constructor(private paisService:PaisService) { }

  public buscar( termino: string): void{
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino).subscribe(capitales => {
      this.capitales = capitales;
      console.log('capitales', this.capitales)
    }, (error) => {
      this.hayError = true;
      this.capitales = [];
    });
  }
}
