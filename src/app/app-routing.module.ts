import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ListsComponent } from './features/lists/lists.component';
import { FeedComponent } from './features/feed/feed.component';
import { FriendsComponent } from './features/friends/friends.component';
import { SettingsComponent } from './features/settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
