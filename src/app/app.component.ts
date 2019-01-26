import { Component, AfterViewInit, ViewChild } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ANIMU';

  @ViewChild('scrolltest') scrolltest: any;

  options = {};

  ngAfterViewInit() {
    let elem = this.scrolltest.nativeElement;

    Scrollbar.init(elem, this.options);
  }
}
