import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from './portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() portfolios: Portfolio[]

  /*portfolios: Portifolio[] = [{
    name: "PROJECT NAME",
    image: "assets/img/portfolio/cabin.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  },
  {
    name: "PROJECT NAME",
    image: "assets/img/portfolio/cake.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  },
  {
    name: "PROJECT NAME",
    image: "assets/img/portfolio/circus.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  },
  {
    name: "PROJECT NAME",
    image: "assets/img/portfolio/game.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  },
  {
    name: "PROJECT NAME",
    image: "assets/img/portfolio/safe.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  },
  {
    name: "PROJECT NAME",
    image: "assets/img/portfolio/submarine.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
  }]*/

  constructor() { }

  ngOnInit() {
  }

}
