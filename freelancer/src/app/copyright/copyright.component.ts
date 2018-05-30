import { Component, OnInit } from '@angular/core';
import { Copyright } from 'src/app/copyright/copyright.model';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyright: Copyright = {
    owner: "Your Website",
    year: 2018
  }

  constructor() { }

  ngOnInit() {
  }

}
