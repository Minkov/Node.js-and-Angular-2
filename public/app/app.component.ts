import { Component } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.loadSuperheroes();
  }

  loadSuperheroes() {
    this.http.get('/superheroes').forEach(x => console.log(x));
  }
}
