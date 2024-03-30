import { Component, OnInit } from '@angular/core';
import { DataService, EventInterface } from './services/data.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Time Voyage';
  public searchCtrl = new FormControl('');

  timeLineData!: EventInterface[];
  filteredTimelineData: EventInterface[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.timeLineData = this.dataService.timeLineData;
    this.filteredTimelineData = [...this.timeLineData];

    this.searchCtrl.valueChanges.subscribe(res => {
      if (res !== '') {
        this.filteredTimelineData = this.filteredTimelineData.filter((ele: EventInterface) => ele.title.includes(res) || ele.date.includes(res) || ele.description.includes(res));
      } else {
        this.filteredTimelineData = this.timeLineData;
      }
    })
  }

}
