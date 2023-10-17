import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-info-pane',
  templateUrl: './info-pane.component.html',
  styleUrls: ['./info-pane.component.css'],
})
export class InfoPaneComponent implements OnInit {
  items: MenuItem[] | undefined

  ngOnInit() {
    this.items = [
      {
        label: 'gay',
      },
    ]
  }
}
