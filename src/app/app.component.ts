import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routeLinks : any[];
  //activeLink = this.links[0];
  activeLinkIndex = -1;
  background = 'primary';
  constructor(private router: Router) {
    this.routeLinks  = [
      {
        label: 'About Us',
        link: './product1',
        index: 0
      }, {
        label: 'Services',
        link: './product2',
        index: 1
      }, {
        label: 'Clients',
        link: './product3',
        index: 2
      }, {
        label: 'Contact Us',
        link: './product4',
        index: 3
      }, {
        label: 'Locations',
        link: './product5',
        index: 4
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
