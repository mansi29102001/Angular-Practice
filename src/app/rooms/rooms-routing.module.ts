import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { RoomGuard } from './guards/room.guard';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  { path: '', 
    component: RoomsComponent, 
    //canActivate: [RoomGuard],
    children: [
      {path: 'add', component: AddRoomComponent},
      {path: ':roomId', component: BookRoomComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
