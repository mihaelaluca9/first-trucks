import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-trucks';
  mobileMenuOpen = false;

  handleEvent($event) {
    switch ($event.type) {
      case 'showMobileMenu':
        this.mobileMenuOpen = $event.value;
        break;
    }
  }
}
