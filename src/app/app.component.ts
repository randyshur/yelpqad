import { Component, OnInit } from '@angular/core';
import { YelpService } from './yelp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-swapi';

  constructor(private swapiService: YelpService) { }

}
