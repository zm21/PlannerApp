import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private notifierService: NotifierService, private spinner: NgxSpinnerService) { }

  errorMessage: string;

  onSubmit(form: NgForm){
    this.spinner.show();
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.model.eventId=this.myEvent.id;
      setTimeout(() => {
        this.eventsService.addNote(this.model);
        this.spinner.hide();
        this.notifierService.notify('success', 'Note was success added!')
        form.resetForm();
        this.model = new NoteModel();
      }, 2500);
    }
    else{
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('error', 'Enter all fields!')
      }, 2500);
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
