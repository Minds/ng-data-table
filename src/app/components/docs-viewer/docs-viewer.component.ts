import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'docs-viewer',
  templateUrl: './docs-viewer.component.html'
})
export class DocsViewerComponent implements OnInit {

  path: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.path = `/assets/src/${params['component']}/README.md`;
    });
  }
}
