import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rotateCubeToLeft } from 'ngx-router-animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('rotateCubeToLeft', [
      transition('home => about', useAnimation(rotateCubeToLeft))
    ])
  ]
})
export class AppComponent {
  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
