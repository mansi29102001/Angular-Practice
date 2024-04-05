import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsServiceService } from '../services/rooms-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    checkinTime: new Date(),
    checkoutTime: new Date()
  };

  successMessage: string ='';

  constructor(private roomService: RoomsServiceService){ }

  addRoom(form: NgForm) {
    this.roomService.addRooms(this.room).subscribe(data => {
      if(data){
        this.successMessage = "Room added successfully !!";
        form.reset();
      }
    });
  }

}
