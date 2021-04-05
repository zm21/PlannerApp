import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';
import { PassThrough } from 'stream';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'ListEvents',
  templateUrl: './ListEvents.component.html',
  styleUrls: ['./ListEvents.component.css']
})
export class ListEventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  eventsList:EventModel[];
  visibleEventsList:EventModel[];
  hiddenEventsList:EventModel[];


  ngOnInit() {
    this.eventsList = this.eventsService.getEvents();
    this.visibleEventsList=this.eventsService.getVisibleEvents();
    this.hiddenEventsList=this.eventsService.getHiddenEvents();

    this.eventsService.changeEvents.subscribe(data => {
      this.eventsList = this.eventsService.getEvents();
      this.visibleEventsList=this.eventsService.getVisibleEvents();
      this.hiddenEventsList=this.eventsService.getHiddenEvents();
    })

    console.log(this.eventsList)
  }

}
