import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICarouselItem } from '../../models/menu.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  editMode = false;
  @Input() public carouselItems: ICarouselItem[] = [];
  @Output() public visibleEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public isVisibled: boolean = false;

  visible(isVisible: boolean) {
    this.visibleEmitter.emit(isVisible);
    this.isVisibled = isVisible;
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }
}
