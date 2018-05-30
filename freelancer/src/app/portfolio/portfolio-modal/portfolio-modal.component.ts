import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../portfolio.model';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements OnInit {

  @Input() portfolio: Portfolio;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}