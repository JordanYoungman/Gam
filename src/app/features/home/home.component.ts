import { Component, OnInit } from '@angular/core';
import { GameDTO } from 'src/app/models/GameDTO';
import { SteamGamesResponseModel } from 'src/app/models/SteamGamesResponse';
import { SteamCallService } from 'src/app/services/steam-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  layout: string = 'list';

  public games: any[] = [];

  public steamCall: SteamGamesResponseModel | undefined;

  public totalRecords: number = 0;
  public loading: boolean = true;
  
  constructor(private steamCaller: SteamCallService){

  }

  ngOnInit(): void {
    this.steamCaller.getGames(0, 30, "76561198114790824").subscribe(x => {
      this.games = x.results
      this.totalRecords = x.totalResults
      this.loading = false;
    })
  }

  loadData(event: any) {
    this.loading = true;
    this.steamCaller.getGames(event.first, event.rows, "76561198114790824").subscribe(x => {
      this.games = x.results
      this.totalRecords = x.totalResults
      this.loading = false;
    })
  }

  changeSource(event: any, name: any){
    event.target.src = name;
    event.target.classList.add("cover-img");
  }

  searchFunction(event: any){
    var gameToFind = event.srcElement.value
    this.loading = true;
    this.steamCaller.getGames(0, 30, "76561198114790824", gameToFind).subscribe(x => {
      this.games = x.results
      this.totalRecords = x.totalResults
      this.loading = false;
    })
  }

  // getImage(imageId: string) {
  //   return "background-image: 'url(//images.igdb.com/igdb/image/upload/t_cover_big/' + imageId + '.jpg);'
  // }
}
