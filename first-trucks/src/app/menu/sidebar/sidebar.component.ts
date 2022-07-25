import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() mobileMenuOpen = false;
  @Output() eventFromSidebar = new EventEmitter<any>();

  menuItems: any = [
    { name: 'Home', route: '/home' },
    { name: 'Create Schedule', route: '/create-schedule' },
  ];

  constructor() {}

  ngOnInit(): void {}

  closeMobileMenu() {
    this.eventFromSidebar.emit({
      type: 'showMobileMenu',
      value: false,
    });
  }
}
