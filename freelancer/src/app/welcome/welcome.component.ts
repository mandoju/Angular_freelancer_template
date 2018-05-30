import { Component, OnInit, Input } from '@angular/core';
import { Welcome } from 'src/app/welcome/welcome.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() welcome: Welcome

  constructor() { }

  ngOnInit() {
  }

}
