import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  
  baseURL: string = 'https://localhost:7257/';

  constructor(private http: HttpClient) { }

  getLists(skip: number, take: number, userId: string, shared: boolean) {

    let params = new HttpParams()
    .set('skip', skip)
    .set('take', take)
    .set('userId', userId)
    .set('shared', shared)

    return this.http.get<any>(this.baseURL + "api/Lists", {params: params});
  }
}
