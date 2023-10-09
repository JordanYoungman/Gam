import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import igdb from 'igdb-api-node';

@Injectable({
  providedIn: 'root'
})
export class IgdbCallService {

  public clientID: string = '2hxsqymjeqhzt5l7i5h5b6kpk2lczj';
  public clientSecret: string = '75casgqokzbemtod55lw2lprc25pmn';


  constructor(public http: HttpClient) { }

  public getAccessToken(){
    var testUrl = `https://id.twitch.tv/oauth2/token?client_id=${this.clientID}&client_secret=${this.clientSecret}&grant_type=client_credentials`;
    return this.http.post<any>(testUrl, null);
  }

  public async getGame(){
  }
}
