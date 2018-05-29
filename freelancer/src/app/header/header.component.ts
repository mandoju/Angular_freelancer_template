import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShrink: boolean = false;

  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset > 0) {
             this.isShrink = true;
        } else {
             this.isShrink = false;
        }
      });
    }

   }

  ngOnInit() {

    // funcionalidade para adicionar o scrollspy no header após certa distancia no scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
    // fim da funcionalidade para adiconar o scrollspy

  }

}

