import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEventComponent } from './components/AddNewEvent/AddNewEvent.component';
import { EditEventComponent } from './components/EditEvent/EditEvent.component';
import { EventDetailsComponent } from './components/EventDetails/EventDetails.component';
import { HomeComponent } from './components/Home/Home.component';
import { ListEventsComponent } from './components/ListEvents/ListEvents.component';
import { Page404Component } from './components/Page404/Page404.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, pathMatch:'full'},
  {path:'events', component: ListEventsComponent, pathMatch:'full'},
  {path:'addEvent', component: AddNewEventComponent, pathMatch:'full'}, 
  {path:'event/:id', component: EventDetailsComponent},
  {path:'editEvent/:id', component: EditEventComponent},
  {path:'**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
