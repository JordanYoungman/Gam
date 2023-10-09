import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})



export class ToolbarComponent {

  public bntStyle: string = 'nav-close';

  sidebarToggle(){
    if(this.bntStyle == 'nav-close'){
      this.bntStyle = 'nav-open'
    } else {
      this.bntStyle = 'nav-close'
    }
  }

}
