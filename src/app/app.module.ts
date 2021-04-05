import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { EventItemComponent } from './components/EventItem/EventItem.component';
import { ListEventsComponent } from './components/ListEvents/ListEvents.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { EventDetailsComponent } from './components/EventDetails/EventDetails.component';
import { AddNewEventComponent } from './components/AddNewEvent/AddNewEvent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    EventDetailsComponent,
    AddNewEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
