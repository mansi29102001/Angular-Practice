import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'hotelInventory';

  @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;

  constructor(private init: InitService){console.log(init);
  }

  ngAfterViewInit(): void {
    const comp = this.vcr.createComponent(RoomsComponent);
  }
}
