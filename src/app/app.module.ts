import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgIf, NgFor } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './features/home/home.component'
import { FriendsComponent } from './features/friends/friends.component'
import { FeedComponent } from './features/feed/feed.component'
import { ListsComponent } from './features/lists/lists.component'
import { SettingsComponent } from './features/settings/settings.component'
import { HttpClientModule } from '@angular/common/http'
import { GameTileComponent } from './shared/game-tile/game-tile.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    FeedComponent,
    ListsComponent,
    SettingsComponent,
    GameTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIf,
    NgFor,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
