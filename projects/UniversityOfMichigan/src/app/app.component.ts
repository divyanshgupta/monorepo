import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'mich-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'University Of Michigan Football';
  env = environment;
}
