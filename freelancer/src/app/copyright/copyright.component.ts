import { Component, OnInit, Input } from '@angular/core';
import { Copyright } from './copyright.model';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  @Input() copyright: Copyright
  /*copyright: Copyright = {
    owner: "Your Website",
    year: 2018
  }*/

  constructor() { }

  ngOnInit() {
  }

}
