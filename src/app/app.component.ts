import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ANIMU';

  @ViewChild('scrolltest') scrolltest: any;

  options = {};

  ngOnInit() {
    console.log(Scrollbar);
  }

  ngAfterViewInit() {
    let elem = this.scrolltest.nativeElement;
    console.log(elem);
    // Scrollbar.init(document.getElementById('my-scrollbar'), this.options);
    Scrollbar.init(elem, this.options);
  }
}
