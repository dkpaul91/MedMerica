import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isBtnActive: boolean = false;
  isNavActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavActive() {
    this.isBtnActive = !this.isBtnActive;
    this.isNavActive = !this.isNavActive;
  }

}
