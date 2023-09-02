import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exibition } from 'src/app/model/exibition.model';

@Component({
  selector: 'app-exibition-item',
  templateUrl: './exibition-item.component.html',
  styleUrls: ['./exibition-item.component.css'],
})
export class ExibitionItemComponent {
  @Input()
  showEditButton = false;

  @Input() exibition: Exibition = new Exibition();

  @Output() clicked: EventEmitter<void> = new EventEmitter();

  onEditClicked(): void {
    this.clicked.emit();
  }
}
