import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../models/menu.interface';

@Component({
  selector: 'app-mical-container',
  templateUrl: './mical-container.component.html',
  styleUrls: ['./mical-container.component.scss'],
})
export class MicalContainerComponent {
  public isAuthorize: boolean = false;
  public showText: boolean = false;

  public unauthorizedMenu: IMenuItem[] = [
    {
      name: 'Login/Register',
      url: 'login',
    },
  ];

  public authorizedMenu: IMenuItem[] = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'About',
      url: 'about',
    },
    {
      name: 'Furnitures',
      url: 'furnitures',
    },
    {
      name: 'Testimonial',
      url: 'testimonial',
    },
    {
      name: 'Contact Us',
      url: 'contact-us',
    },
  ];

  getIsAuthorizeInfo(event: boolean) {
    this.isAuthorize = event;
  }

  getMenuItems(): IMenuItem[] {
    return this.isAuthorize ? this.authorizedMenu : this.unauthorizedMenu;
  }

  // section header
  public headerTitle: string = 'Welcome';
  public headerSubTitle: string = 'Car repair services';
  public headerParagraph: string =
    'It is a long established fact that a reader will be distracted by the redable content of a page when looking at its layout. The point of using Lorem ipsum is that it has a more-or-less normal distribution of letters.';

  @Input() public headerButtonInfo: string = 'More info';
  @Input() public headerButtonContact: string = 'Contact us';

  @Output() public buttonClick = new EventEmitter();

  onClick() {
    this.buttonClick.emit();
  }
}
