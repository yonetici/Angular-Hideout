import {Component} from '@angular/core';


@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav navbar-pilss">
      <li><a href="" class="nav-link" [routerLink]="['/welcome']">Home</a></li>
      <li><a href="" class="nav-link" [routerLink]="['/products']">Product List</a></li>
    </ul>
    </nav>
    <div class="container"><router-outlet></router-outlet></div>
`
})

export class AppComponent {
  pageTitle: string = '2Gentech Angular Lab';

}
