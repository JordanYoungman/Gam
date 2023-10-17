import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  stateOptions: any[] = [{label: 'My Lists', value: 'my-lists'}, {label: 'Friends Lists', value: 'friends-lists'}];

  value: string = 'my-lists';

  public lists: any[] = [];

  public totalRecords: number = 0;
  public loading: boolean = true;

  constructor(public listService: ListsService){

  }

  ngOnInit(): void {
    this.listService.getLists(0, 20, "2", false).subscribe(x => {
      this.lists = x.results;
      this.totalRecords = x.totalResults;
      this.loading = false;
    })
  }
}
