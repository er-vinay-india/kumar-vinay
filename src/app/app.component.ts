import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Vinay Kumar Sharma | A Techincal Soul';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Vinay, Kumar, Sharma, Developer, Programmer'},
      {name: 'description', content: 'Welcome Friends! My Self Vinay Kumar Sharma, Soul of technical world.'},
      {name: 'robots', content: 'index, follow'},
      {name: 'author', content: 'Vinay Kumar Sharma' },
      {name: 'date', content: '2021-04-03', scheme: 'YYYY-MM-DD' }
    ]);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
   }
}
