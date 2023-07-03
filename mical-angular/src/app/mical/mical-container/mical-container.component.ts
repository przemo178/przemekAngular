import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem, ICarouselItem } from '../models/menu.interface';

@Component({
  selector: 'app-mical-container',
  templateUrl: './mical-container.component.html',
  styleUrls: ['./mical-container.component.scss'],
})
export class MicalContainerComponent {
  // menu section

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

  public isVisible: boolean = false;

  public carouselItems: ICarouselItem[] = [
    {
      id: 1,
      title: 'Auto Diagnose',
      imgName: 'assets/img/thr.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque enim eget lorem consequat, eget.',
      type: 'innyTyp',
    },
    {
      id: 2,
      title: 'Free Fuel',
      imgName: 'assets/img/thr1.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque enim eget lorem consequat, eget.',
      type: 'innyTyp',
    },
    {
      id: 3,
      title: 'Change tires',
      imgName: 'assets/img/thr2.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque enim eget lorem consequat, eget.',
      type: 'common',
    },
  ];

  getIsAuthorizeInfo(event: boolean) {
    this.isAuthorize = event;
  }

  getMenuItems(): IMenuItem[] {
    return this.isAuthorize ? this.authorizedMenu : this.unauthorizedMenu;
  }

  getIsCarouselInfo(event: boolean) {
    this.isVisible = event;
  }

  getCarouselItems(): ICarouselItem[] {
    return this.isVisible ? this.carouselItems : this.carouselItems;
  }
}
