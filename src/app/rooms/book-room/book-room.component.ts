import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent {

  constructor(private router: ActivatedRoute) { }

  id: number = 0;

  id$ = new Observable;

  ngOnInit() {
    // this.id = this.router.snapshot.params['roomId'];
    // this.router.params.subscribe((param) => {this.id = param['roomId']});
    // this.id$ = this.router.params.pipe(
    //   map(el => {return el['roomId']})
    // )

    this.id$ = this.router.paramMap.pipe(map(el => {return el.get('roomId')}));
  }

}
