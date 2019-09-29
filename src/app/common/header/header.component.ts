import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { menu } from './../../constants/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  // tslint:disable-next-line: no-output-native
  @Output() clickEvent = new EventEmitter();
  menu: any[] = menu;
  constructor() {}

  ngOnInit() {}

  click() {
    this.clickEvent.emit('thanks dude!');
  }
}
