import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { EventsService } from '../core/Events.service';
@Component({
  selector: 'AddNewEvent',
  templateUrl: './AddNewEvent.component.html',
  styleUrls: ['./AddNewEvent.component.css']
})
export class AddNewEventComponent implements OnInit {

  model = new EventModel();
  errorMessage: string;
  constructor(private router: Router, private eventsService: EventsService, private notifierService: NotifierService, private spinner: NgxSpinnerService) { }

  onSubmit(form: NgForm){

    this.spinner.show();
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.eventsService.addEnvet(this.model);
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('success', 'Success add new event!')
        this.router.navigate(['/events'])
      }, 2500);
      form.resetForm();
    }
    else{
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('error', 'Enter all fields!')
      }, 2500);
    }
    
    
  }

  ngOnInit() {
  }

}
