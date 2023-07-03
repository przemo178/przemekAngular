import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headerTitle: string = 'Welcome';
  public headerSubTitle: string = 'Car repair services';
  public headerParagraph: string =
    'It is a long established fact that a reader will be distracted by the redable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters.';

  @Input() public headerButtonInfo: string = 'More info';
  @Input() public headerButtonContact: string = 'Contact us';

  @Output() public buttonClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onClick(isOpen: boolean) {
    this.buttonClick.emit(isOpen);
  }
}
