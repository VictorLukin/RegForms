import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RegForms';
  isPrime = true;
  globalStyle = 'primeng';

  receiveStyle(value: string) {
    this.globalStyle = value;
    this.isPrime = value === 'primemg';
  }

}
