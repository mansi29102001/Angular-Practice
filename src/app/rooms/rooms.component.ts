import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsServiceService } from './services/rooms-service.service';
import { Observable, Subject, catchError } from 'rxjs';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit {

  hotelName = "High Rise";
  numberOfRooms = 10;
  hiderooms: boolean = false;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  error$ = new Subject<string>;

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err => {
      console.log(err);
      this.error$.next(err.message);  
      return [];    
    })
  );

  stream = new Observable<string>(data => {
    data.next("user 1");
    data.next("user 2");
    data.next("user 3");
    data.complete();
  })

  constructor(private roomsService: RoomsServiceService){}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe(data => {
      console.log(data);
      
    });
    this.stream.subscribe(result => {
      console.log(result);
      
    });
    this.roomsService.getRooms$.subscribe(room => {
      this.roomList = room;
    });
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms view"
  }

  toggle(){
    this.hiderooms = !this.hiderooms;
  }

  selectRooms(room: RoomList){
    console.log(room);
    
  }

  addRoom(){
    const newRoom: RoomList = {
      roomNumber: "4",
      roomType: "Deluxe",
      amenities: "AC, Free wifi, TV, Food",
      price: 9000,
      checkinTime: new Date("12-Nov-2025"),
      checkoutTime: new Date("14-Nov-2025"),
    };
    this.roomsService.addRooms(newRoom).subscribe(data => {
      this.roomList = data;
    })
  }

  editRoom() {
    const newRoom: RoomList = {
      roomNumber: "3",
      roomType: "Deluxe",
      amenities: "AC, Free wifi, TV, Food",
      price: 9000,
      checkinTime: new Date("12-Nov-2025"),
      checkoutTime: new Date("14-Nov-2025"),
    };

    this.roomsService.editRoom(newRoom).subscribe(data => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe(data => {
      this.roomList = data;
    })
  }
}
