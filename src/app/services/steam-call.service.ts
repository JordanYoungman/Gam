import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SteamGamesModel } from '../models/SteamGamesModel';
import { SteamGamesResponseModel } from '../models/SteamGamesResponse';

@Injectable({
  providedIn: 'root'
})
export class SteamCallService {

  proxyCall: string = 'https://corsproxy.io/?';

  constructor(private http: HttpClient) { }

  getUserOwnedGames() {
    // now returns an Observable of Config
    return this.http.get<SteamGamesResponseModel>(this.proxyCall + "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=3D02DA9FD4221EC574446E9139A16403&steamid=76561198129649478&format=json&include_appinfo=true&include_played_free_games=true");
  }
}
