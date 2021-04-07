import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';
import { EventsService } from '../core/Events.service';

@Component({
  selector: 'EventItem',
  templateUrl: './EventItem.component.html',
  styleUrls: ['./EventItem.component.css']
})
export class EventItemComponent implements OnInit {

  constructor(private eventsService: EventsService,  private notifierService: NotifierService, private spinner: NgxSpinnerService) { }
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
    this.spinner.show();
    if(this.model.isValid() == true){
      this.errorMessage = "";
      this.model.eventId=this.myEvent.id;
      this.eventsService.addNote(this.model);
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('success', 'Note was success added!')
      }, 2500);
      form.resetForm();
      // this.isModalVisible = false;
    }
    else{
      this.isModalVisible = true;
      setTimeout(() => {
        this.spinner.hide();
        this.notifierService.notify('error', 'Enter all fields!')
      }, 2500);
    }
  }
  
}
