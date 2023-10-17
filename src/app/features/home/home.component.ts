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

  constructor(private steamCaller: SteamCallService) {}

  ngOnInit(): void {
    this.steamCaller.getGames(0, 30, '76561198114790824').subscribe((x) => {
      this.games = x.results
      this.totalRecords = x.totalResults
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
    this.loading = true
    this.steamCaller
      .getGames(event.first, event.rows, '76561198114790824')
      .subscribe((x) => {
        this.games = x.results
        this.totalRecords = x.totalResults
        this.loading = false
      })
  }

  changeSource(event: any, name: any) {
    event.target.src = name
    event.target.classList.add('cover-img')
  }

  searchFunction(event: any) {
    var gameToFind = event.srcElement.value
    this.loading = true
    this.steamCaller
      .getGames(0, 30, '76561198114790824', gameToFind)
      .subscribe((x) => {
        this.games = x.results
        this.totalRecords = x.totalResults
        this.loading = false
      })
  }

  // getImage(imageId: string) {
  //   return "background-image: 'url(//images.igdb.com/igdb/image/upload/t_cover_big/' + imageId + '.jpg);'
  // }
}
