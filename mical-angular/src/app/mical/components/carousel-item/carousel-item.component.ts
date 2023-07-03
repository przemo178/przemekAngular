import { Component, Input } from '@angular/core';
import { ICarouselItem, IMenuItem } from '../../models/menu.interface';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
  @Input() public carouselItem: ICarouselItem;
}
