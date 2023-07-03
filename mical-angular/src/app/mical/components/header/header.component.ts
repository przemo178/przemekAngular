import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public buttonClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onClick(isOpen: boolean) {
    this.buttonClick.emit(isOpen);
  }
}
