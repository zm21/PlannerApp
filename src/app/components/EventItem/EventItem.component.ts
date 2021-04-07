import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  @Input() myEvent: EventModel;
  // isPriority: boolean = false;
  // isHidden: boolean = false;
  ngOnInit() {
  }

  changePriority(): void {
    // this.myEvent.isPriority != this.myEvent.isPriority;
    this.eventsService.changeIsPriority(this.myEvent.id)
    // this.isPriority = !this.isPriority;
  }

  changeIsHidden(): void{
    this.eventsService.changeIsHidden(this.myEvent.id);
  }

  modal():void{
    this.isModalVisible=true;
  }

  addNote():void{

  }


  model = new NoteModel();
  errorMessage: string;
  isModalVisible: boolean = false;

  onSubmit(form: NgForm){
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.model.eventId=this.myEvent.id;
      this.eventsService.addNote(this.model);
      form.resetForm();
      // this.isModalVisible = false;
    }
    else{
      this.isModalVisible = true;
      this.errorMessage="Enter all fields!";
    }
  }
  
}
