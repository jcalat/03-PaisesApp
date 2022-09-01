import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.intrface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Pais[] = [];
  numeros:number[]=[4,55,1,6,5];



  constructor(private paisService :PaisService) {}


  getClassCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if(region===this.regionActiva){
      return;
    }

    this.regionActiva = region;
    this.paises=[];

    this.paisService.buscarRegion(region)
    .subscribe(paises=>{
      console.log(paises);
      this.paises=paises;

    })

  }

  ngOnInit(): void {}
}
