import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './core/animations/animations';
import { fadeInAnimation } from './core/animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation, fadeInAnimation],
})
export class AppComponent {
  title = 'ScienceHub';
  constructor(private contexts: ChildrenOutletContexts) {}

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
