import { Component, OnInit } from '@angular/core';
import { SteamGamesResponseModel } from 'src/app/models/SteamGamesResponse';
import { SteamCallService } from 'src/app/services/steam-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public steamCall: SteamGamesResponseModel | undefined;
  
  constructor(private steamCaller: SteamCallService){

  }

  ngOnInit(): void {
    this.steamCaller.getUserOwnedGames().subscribe(x => {
      this.steamCall = x;
      console.log(this.steamCall.response.games)
    })
  }
}
