import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navigation.component.html'
})
export class NavbarComponent {
  isCollapsed = true;

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
