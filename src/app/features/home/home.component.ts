import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { GameDTO } from 'src/app/models/GameDTO'
import { SteamGamesResponseModel } from 'src/app/models/SteamGamesResponse'
import { SteamCallService } from 'src/app/services/steam-call.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  layout: string = 'list'
  @ViewChild('divToMeasure', { static: false }) divToMeasureElement:
    | any
    | undefined

  public games: any[] = []

  public gridAspectRatio: number = 9 / 13
  public gridColumns: number = 7
  public gameWidth: number = 225
  public gameHeight: number = 325

  public steamCall: SteamGamesResponseModel | undefined

  public totalRecords: number = 40
  public loading: boolean = true

  constructor(private steamCaller: SteamCallService) { }

  ngOnInit(): void {
    // 76561198114790824
    this.steamCaller.getGames(0, 30, '76561198129649478').subscribe((x) => {
      this.games = x
      this.loading = false
    })
  }

  ngAfterViewInit() {
    // let divToMeasureWidth = this.divToMeasureElement!.nativeElement.offsetWidth
    console.log('div to measure', this.divToMeasureElement)

    let divToMeasureWidth = this.divToMeasureElement!.nativeElement.offsetWidth
    this.gameWidth = divToMeasureWidth / this.gridColumns
    this.gameHeight = this.gameWidth / this.gridAspectRatio
  }

  loadData(event: any) {
    console.log(event)
  }

  // getImage(imageId: string) {
  //   return "background-image: 'url(//images.igdb.com/igdb/image/upload/t_cover_big/' + imageId + '.jpg);'
  // }
}
