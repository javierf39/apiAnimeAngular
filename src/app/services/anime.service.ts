import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  public apiURL = 'https://api.jikan.moe/v4/anime?q'

  constructor(private http: HttpClient) { }

  //obtener anime desde la api segun busqueda
  getAnime(anime:string):Observable<any>{
    return this.http.get(`${this.apiURL}=${anime}`)
  }
}
