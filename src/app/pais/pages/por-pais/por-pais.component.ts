import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.intrface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino:string='';
  hayError:boolean=false;
  paises: Pais[]=[]


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError=false;
    this.termino=termino
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
    .subscribe((paises) => {
      console.log(paises);
      this.paises=paises;


    },(err) =>{
      this.hayError=true;
      this.paises=[];
    } );
  }
  sugerencias (termino:string){
    this.hayError=false;
  }

}
