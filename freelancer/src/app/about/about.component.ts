import { Component, OnInit, Input } from '@angular/core';
import { About } from './about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() about : About

  constructor() { }

  ngOnInit() {
  }

}
