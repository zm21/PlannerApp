import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EditEvent',
  templateUrl: './EditEvent.component.html',
  styleUrls: ['./EditEvent.component.css']
})
export class EditEventComponent implements OnInit {

  model = new EventModel();
  eventId!: string;
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private eventsService: EventsService, private notifierService: NotifierService, private spinner: NgxSpinnerService) { }

  onSubmit(form: NgForm) {
    this.spinner.show();
    if (this.model.isValid() == true) {
      this.errorMessage = "";
      this.eventsService.updateEvent(this.model);
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('success', 'Event success edited!');
        this.router.navigate(['/events'])
        this.model = new EventModel();
      }, 2000);

    }
    else {
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('error', 'Enter all fields!')
      }, 2000);
    }
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    })
    this.model = this.eventsService.getEventById(this.eventId);
  }

}
