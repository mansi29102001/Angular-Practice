import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsServiceService {

  roomList: RoomList[] = [];

  //headers = new HttpHeaders({'token' : 'eryiohgaj571byijd'});

  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRooms(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest("GET", "https://jsonplaceholder.typicode.com/photos", {reportError: true});
    return this.http.request(request);
  }
}
