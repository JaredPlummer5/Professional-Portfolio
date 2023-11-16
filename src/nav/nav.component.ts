import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  showNavLinks = false;

  toggleNavLinks() {
      this.showNavLinks = !this.showNavLinks;
  }

}
