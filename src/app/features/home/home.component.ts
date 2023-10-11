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

  public totalRecords: number = 40;
  public loading: boolean = true;
  
  constructor(private steamCaller: SteamCallService){

  }

  ngOnInit(): void {
    this.steamCaller.getGames(0, 30, "76561198114790824").subscribe(x => {
      this.games = x
      this.loading = false;
    })
  }

  loadData(event: any) {
    console.log(event)
  }

  // getImage(imageId: string) {
  //   return "background-image: 'url(//images.igdb.com/igdb/image/upload/t_cover_big/' + imageId + '.jpg);'
  // }
}
