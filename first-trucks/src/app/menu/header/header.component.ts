import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() eventFromHeader = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  openMobileMenu(): void {
    this.eventFromHeader.emit({
      type: 'showMobileMenu',
      value: true,
    });
  }
}
