import { Component, OnInit } from '@angular/core';
import { Welcome } from 'src/app/welcome/welcome.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcome: Welcome = {
    title: "Start Bootstrap",
    description: "Web Developer - Graphic Artist - User Experience Designer"
  }

  constructor() { }

  ngOnInit() {
  }

}
