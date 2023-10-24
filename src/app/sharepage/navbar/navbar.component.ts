import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false; // Initially, the menu is closed

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open/closed
  }
}
