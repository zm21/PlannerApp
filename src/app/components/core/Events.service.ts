import { not } from '@angular/compiler/src/output/output_ast';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/models/event.model';
import { NoteModel } from 'src/app/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events:EventModel[] = [
    new EventModel("Andrii Birthday", "...", "01/01/2021", "https://i.pinimg.com/originals/91/dd/b8/91ddb8751920595dfde2515820730482.gif", true),
    new EventModel("Demo project", "...", "26/08/2021","https://five.epicollect.net/api/internal/media/ec5-demo-project?type=photo&name=logo.jpg&format=project_thumb", false),
    new EventModel("Work with homework", "...", "23/11/2021","https://mustafavarici.com/wp-content/uploads/2020/08/Homework-1024x682.jpeg", false),
    new EventModel("Study in STEP", "...", "11/05/2021","https://yt3.ggpht.com/ytc/AAUvwniCrLrdm2czf92k8tmlOVNi041tOKc-5MUdNaPzCQ=s900-c-k-c0x00ffffff-no-rj", false),
  ]

  private notes:NoteModel[]=[]

  changeEvents = new EventEmitter<boolean>();


  addEnvet(model: EventModel) {
    this.events.push(new EventModel(model.title, model.description, model.date, model.image));
    this.changeEvents.emit(true);
  }

  getEvents():EventModel[]{
    return this.events;
  }

  changeIsHidden(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isHidden=!this.events[index].isHidden;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  changeIsPriority(id:string): void {
    const index = this.events.findIndex(item => item.id === id);
    this.events[index].isPriority=!this.events[index].isPriority;
    console.log(this.events);
    this.changeEvents.emit(true);
  }

  getVisibleEvents():EventModel[]{
   return  this.events.filter( (obj) => {
      return obj.isHidden===false;
    });
  }

  getHiddenEvents():EventModel[]{
    return  this.events.filter( (obj) => {
       return obj.isHidden===true;
     });
   }

  addNote(note: NoteModel):void{
    this.notes.push(new NoteModel(note.text, note.eventId));
    this.changeEvents.emit(true);
    console.log("Add note: ", note);
    console.log("Notes: ",this.notes)
  }

  getEventById(id:string):EventModel{
    return this.events.find(x => x.id == id);
  }

  updateEvent(model:EventModel):Observable<void>{
    const index = this.events.findIndex(item => item.id === model.id);
    this.events[index] = model;
    console.log('updating event: ', model);
    this.changeEvents.emit(true);
    return 
  }

  getEventNotes(eventId:string):NoteModel[]{
    return  this.notes.filter( (obj) => {
      return obj.eventId===eventId;
    });
  }
  
constructor() { }

}
