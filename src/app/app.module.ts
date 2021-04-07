import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { EventItemComponent } from './components/EventItem/EventItem.component';
import { ListEventsComponent } from './components/ListEvents/ListEvents.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';
import { EventDetailsComponent } from './components/EventDetails/EventDetails.component';
import { AddNewEventComponent } from './components/AddNewEvent/AddNewEvent.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/Home/Home.component';
import { Page404Component } from './components/Page404/Page404.component';
import { EditEventComponent } from './components/EditEvent/EditEvent.component';
import { NoteComponent } from './components/Note/Note.component';

@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    ListEventsComponent,
    NavbarComponent,
    EventDetailsComponent,
    AddNewEventComponent,
    HomeComponent,
    Page404Component,
    EditEventComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
