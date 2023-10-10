import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameDTO } from '../models/GameDTO';

@Injectable({
  providedIn: 'root'
})
export class SteamCallService {

  baseURL: string = 'https://localhost:7257/';

  constructor(private http: HttpClient) { }

  getGames(skip: number, take: number, steamId: string, gameToFind: string | null = null) {

    let params = new HttpParams()
    .set('skip', skip)
    .set('take', take)
    .set('steamId', steamId)
    if(gameToFind != null){
      params = params.set('gameToSearch', gameToFind)
    }

    console.log(params)
    return this.http.get<GameDTO[]>(this.baseURL + "api/Games", {params: params});
  }
}
