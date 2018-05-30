import { Component, OnInit, Input } from '@angular/core';
import { Portifolio } from '../portfolio.model';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements OnInit {

  @Input() portfolio: Portifolio;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}