import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Output() incrementEvent = new EventEmitter<void>();
  @Output() decrementEvent = new EventEmitter<void>();

  increment() {
    this.incrementEvent.emit();
  }

  decrement() {
    this.decrementEvent.emit();
  }
}
