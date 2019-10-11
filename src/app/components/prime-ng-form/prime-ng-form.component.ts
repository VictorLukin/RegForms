import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-prime-ng-form',
  templateUrl: './prime-ng-form.component.html',
  styleUrls: ['./prime-ng-form.component.scss']
})
export class PrimeNgFormComponent {

  @Output() changeStyle: EventEmitter<string> = new EventEmitter<string>();
  username = '';
  userPassword = '';

  onClick() {
    this.changeStyle.emit('material');
  }

}
