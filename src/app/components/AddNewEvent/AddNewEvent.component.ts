import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private eventsService: EventsService) { }

  onSubmit(form: NgForm){
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.eventsService.addEnvet(this.model);
      form.resetForm();
    }
    else{
      this.errorMessage="Enter all fields!";
    }
  }

  ngOnInit() {
  }

}
