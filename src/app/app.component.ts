import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { slideInAnimation } from './route-transition-animations';

const WEB_TITLE = 'Vinay Kumar Sharma | A Technical Soul';

const WEB_META_TAGS = [
  { name: 'keywords', content: 'Vinay, Kumar, Sharma, Developer, Programmer' },
  { name: 'description', content: 'Welcome Friends! My Self Vinay Kumar Sharma, Soul of technical world.' },
  { name: 'robots', content: 'index, follow' },
  { name: 'author', content: 'Vinay Kumar Sharma' },
  { name: 'date', content: '2021-04-03' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(WEB_TITLE);
    this.metaService.addTags(WEB_META_TAGS);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
