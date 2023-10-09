import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.css']
})
export class GameTileComponent {
  @Input() gameTitle = '';
  @Input() imageUrl = '';
  @Input() gameId = 0;
}
