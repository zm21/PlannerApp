import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  onSubmit(form: NgForm){
    if(this.model.isValid() == true){
      this.errorMessage = "";

      this.eventsService.updateEvent(this.model).subscribe(data=>{
        form.resetForm();
        
      });
    }
    else{
      this.errorMessage="Enter all fields!";
    }
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
    })
    this.model = this.eventsService.getEventById(this.eventId);
  }

}
