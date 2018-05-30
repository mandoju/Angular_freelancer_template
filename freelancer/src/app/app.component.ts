import {Http} from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data;

  constructor(private http:Http) {
    this.http.get('assets/config.json')
            .subscribe(res => {this.data = res.json();
            });

 
  }
}
