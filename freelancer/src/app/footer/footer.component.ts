import { Component, OnInit } from '@angular/core';
import { Footer } from 'src/app/footer/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: Footer = {
    leftTitle: "Location",
    leftText: "2215 John Daniel Drive<br/>Clark, MO 65243",
    middleTitle: "Around the Web",
    facebookLink: "https://www.facebook.com/JorgeRamaKrsna",
    googleplusLink: "http://www.google.com" ,
    twitterLink: "http://www.google.com",
    linkedinLink: "http://www.google.com",
    dribbleLink: "http://www.google.com",
    rightTitle:  "About Freelancer",
    rightText: "Freelance is a free to use, open source Bootstrap theme created by <a href=\"http://startbootstrap.com\">Start Bootstrap</a>.",
  }

  constructor() { }

  ngOnInit() {
  }

}
