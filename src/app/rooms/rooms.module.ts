import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { BookRoomComponent } from './book-room/book-room.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [    
    RoomsComponent,
    RoomsListComponent,
    BookRoomComponent,
    AddRoomComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule
  ]
})
export class RoomsModule { }
