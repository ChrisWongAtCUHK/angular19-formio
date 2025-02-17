import { Component } from '@angular/core';
import { SimpleComponent } from './forms/simple/simple.component';

@Component({
  selector: 'app-root',
  imports: [SimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-formio';
}
