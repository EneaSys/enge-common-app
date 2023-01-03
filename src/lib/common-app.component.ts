import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-app',
  template: `
    <p>
      common-app works!
    </p>
  `,
  styles: [
  ]
})
export class CommonAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
