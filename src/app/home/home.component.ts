import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../services/anime.service';
import { tap } from 'rxjs';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameAnime!:string;
  infoAnime:any;
  imgAnime:any;
  type!:string;
  studio!:string;
  encontrado:boolean = true;

  constructor(private animesrv: AnimeService) { }

  ngOnInit(): void {
    
  }

  //funcion para obtener el anime
  getAnime(){
   
    this.infoAnime = '';
    this.imgAnime = '';
    //comprobar si el busqueda tiene algo escrito
    if(this.nameAnime){
      //mostrar spinner
      $("#spinner").css('display', 'block');
      //ocultar mensaje de error en caso de que este visible por algun error anterior
      $(".mensaje-vacio").css('display', 'none');
      this.animesrv.getAnime(this.nameAnime).pipe(
        //comprobar si la api envia algun resultado
        tap((anime:any) => {if(anime.data.length > 0){
                            this.infoAnime = anime.data[0]
                            //ocultar spinner cuando este cargado el resultado
                            $("#spinner").css('display', 'none')
                            //asignar la informacion a cada propiedad
                            this.type = anime.data[0].demographics.length > 0 ? anime.data[0].demographics[0].name : null
                            this.studio = anime.data[0].studios.length > 0 ? anime.data[0].studios[0].name : null
                            this.imgAnime = anime.data[0].images.jpg.image_url
                            this.encontrado = true;
                            console.log(anime.data[0])
                          }
                            else{
                              $("#spinner").css('display', 'none')
                              this.encontrado = false;
                            }
                            })
      ).subscribe()
      //mostrar mensaje de error en caso de que el buscador este vacio
    }else{
      $(".mensaje-vacio").css('display', 'block');
      this.encontrado=true
    };

   
    
  };

}
