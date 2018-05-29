import { Component, OnInit, Input } from '@angular/core';
import { Portifolio } from 'src/app/portfolio/portfolio.model';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PortfolioModalComponent } from '../portfolio-modal/portfolio-modal.component';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portifolio

  constructor(private modalService: NgbModal) {
    
  }

  ngOnInit() {
  }

  open(portfolio) {
    const modalRef = this.modalService.open(PortfolioModalComponent);
    modalRef.componentInstance.portfolio = portfolio;
  }
  
}
