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

  constructor(private animesrv: AnimeService) { }

  ngOnInit(): void {
    
  }

  getAnime(){
   
    this.infoAnime = '';
    this.imgAnime = '';
    if(this.nameAnime){
      $("#spinner").css('display', 'block');
      this.animesrv.getAnime(this.nameAnime).pipe(
        tap((anime:any) => {this.infoAnime = anime.data[0]
                            $("#spinner").css('display', 'none')
                            this.type = anime.data[0].demographics[0].name
                            this.studio =anime.data[0].studios[0].name
                            this.imgAnime = anime.data[0].images.jpg.image_url
                            console.log(anime.data[0])})
      ).subscribe()
    };

   
    
  };

}
