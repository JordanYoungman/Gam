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

  public games: GameDTO[] = [];

  public steamCall: SteamGamesResponseModel | undefined;
  
  constructor(private steamCaller: SteamCallService){

  }

  ngOnInit(): void {
    this.steamCaller.getGames(0, 30, "76561198071690607").subscribe(x => {
      this.games = x
    })
  }

  // getImage(imageId: string) {
  //   return "background-image: 'url(//images.igdb.com/igdb/image/upload/t_cover_big/' + imageId + '.jpg);'
  // }
}
