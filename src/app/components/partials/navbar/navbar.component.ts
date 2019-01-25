import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animu-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string = 'ANIMU';

  constructor() {}

  ngOnInit() {}
}
