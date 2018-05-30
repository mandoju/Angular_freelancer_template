import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from 'src/app/portfolio/portfolio.model';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(portfolio) {
    const modalRef = this.modalService.open(PortfolioModalComponent, {windowClass: 'fade'});
    modalRef.componentInstance.portfolio = portfolio;
  }
  
}
