import { Component, OnInit } from '@angular/core';
import { SteamCallService } from './services/steam-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GamerHoard';

  events: string[] = [];
  opened: boolean = false;
  user: any;
  public userImage: string = '';
  public userName: string = '';

  constructor(public steamCaller: SteamCallService){

  }

  ngOnInit(): void {
    this.steamCaller.getUserImage().subscribe(x => {
      this.user = x;
      this.userImage = this.user.response.players[0].avatarfull;
      this.userName = this.user.response.players[0].personaname;
    })
  }
}
