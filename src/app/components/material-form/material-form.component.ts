import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent {

  @Output() changeStyle: EventEmitter<string> = new EventEmitter<string>();
  username = '';
  userPassword = '';

  onClick() {
    this.changeStyle.emit('primemg');
  }

}
