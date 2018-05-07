import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(CodeViewerComponent) viewer;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    router.events.filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .mergeMap(route => route.data)
      .subscribe(data => {
          this.viewer.setPath(data.src ? data.src : '');
          this.viewer.hideCodeBlock();
      });
  }
}
