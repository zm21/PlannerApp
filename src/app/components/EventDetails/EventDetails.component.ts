import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EventDetails',
  templateUrl: './EventDetails.component.html',
  styleUrls: ['./EventDetails.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId!: string;

  myEvent!: EventModel;

  notes!:NoteModel[];

  model = new NoteModel();

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  errorMessage: string;

  onSubmit(form: NgForm){
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.model.eventId=this.myEvent.id;
      this.eventsService.addNote(this.model);
      form.resetForm();
    }
    else{
      this.errorMessage="Enter all fields!";
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    })
    this.myEvent = this.eventsService.getEventById(this.eventId);
    this.notes = this.eventsService.getEventNotes(this.eventId);
    this.eventsService.changeEvents.subscribe(data => {
      this.notes=this.eventsService.getEventNotes(this.myEvent.id);
    })
  }
}
