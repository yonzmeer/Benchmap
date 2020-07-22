import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = this.router.config.filter(route => route.data?.menu).map(route => route.path);

  constructor(private router: Router) { }
}
