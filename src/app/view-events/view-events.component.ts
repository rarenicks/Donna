import { Component, OnInit } from '@angular/core';

import {ChoresDataService} from '../services/chores-data.service';
import { SessionService } from '../services/session-service';

import {Event} from '../models/app.models';

@Component({
  selector: 'ViewEvents',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css'],
  providers: [ChoresDataService]
})
export class ViewEventsComponent implements OnInit {

    events : [Event];
    constructor(private choresService: ChoresDataService, protected sessionService: SessionService) { }

    ngOnInit() {
      console.log('is logged in..', this.sessionService.isLoggedIn());
      this.choresService.getEvents().subscribe(
        response => this.events = response.items,
        error => console.log(error),
        () => console.log('C0mpleted!')
      );
    }

}
