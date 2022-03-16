import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private _eventService: EventService) { }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe( 
      res => {
        console.log(res.data);
        this.events = res.data;
      },
      err => console.log(err)
    )
  }

}
