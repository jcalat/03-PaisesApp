import { Pais } from './../../interfaces/pais.intrface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Pais[];

  constructor(private activatedRoute: ActivatedRoute,
              private paisServicice: PaisService) { }

  ngOnInit(): void {

      // this.activatedRoute.params
      // //esto funciona porque hemos definido id como parametro de la ruta en el routing module
      // //me suscribo a los cambios que haya en los parametros, en este caso el id en la url
      // .subscribe (({id}) =>{
      //   //devuelve el id de la url
      //   console.log(id);
      //   this.paisServicice.getPaisPorCodigo(id)
      //   .subscribe(pais=>{
      //     console.log(pais)
      //   });

      // });
      this.activatedRoute.params
        .pipe(
          //switchmap tranforma un observable en otro
          switchMap(({id})=>this.paisServicice.getPaisPorCodigo(id)),
          tap(console.log)
        )
        .subscribe(pais=>{this.pais=pais});


  }

}
