import { NgModule, APP_INITIALIZER } from '@angular/core'
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
import { ToolbarComponent } from './shared/toolbar/toolbar.component'

import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { SidebarModule } from 'primeng/sidebar'
import { DataViewModule } from 'primeng/dataview'
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { PanelMenuModule } from 'primeng/panelmenu'
import { InputTextModule } from 'primeng/inputtext'

import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { AuthRoutingModule } from './auth-routing.module'
import { AuthModule } from '@auth0/auth0-angular'
import { LocalAuthService } from './auth.service'
import { InfoPaneComponent } from './info-pane/info-pane.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    FeedComponent,
    ListsComponent,
    SettingsComponent,
    GameTileComponent,
    ToolbarComponent,
    SidebarComponent,
    InfoPaneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIf,
    NgFor,
    FormsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    DataViewModule,
    ScrollPanelModule,
    PanelMenuModule,
    InputTextModule,
    AuthRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-saz03qls21fxsnew.eu.auth0.com',
      clientId: '8kVz0arjJwHOMWD4rjFr8xdzTYXE4wnq',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [
    LocalAuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (localAuthService: LocalAuthService) => () =>
        localAuthService.onLoad(),
      deps: [LocalAuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
