import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {
  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paisesPorRegion: Country[] = [];

  constructor(private paisService:PaisService) { }

  ngOnInit() {
  }

  getClaseCSS( region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region:string){
    if( region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paisesPorRegion = [];
    this.paisService.buscarRegion(region).subscribe( region => {
      this.paisesPorRegion = region;
      console.log(this.paisesPorRegion)
    });
  }
}
