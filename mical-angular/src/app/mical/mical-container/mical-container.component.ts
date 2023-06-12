import { Component } from '@angular/core';
import { IMenuItem } from '../models/menu.interface';

@Component({
  selector: 'app-mical-container',
  templateUrl: './mical-container.component.html',
  styleUrls: ['./mical-container.component.scss']
})
export class MicalContainerComponent {
  public isAuthorize: boolean = false;
  public showText: boolean = false;

  public unauthorizedMenu: IMenuItem[] = [{
    name: "Login/Register",
    url: 'login'
  }];

  public authorizedMenu: IMenuItem[] = [
    {
      name: "Home",
      url: "home"
    },
    {
      name: "About",
      url: "about"
    },
    {
      name: "Furnitures",
      url: "furnitures"
    },
    {
      name: "Testimonial",
      url: "testimonial"
    },
    {
      name: "Contact Us",
      url: "contact-us"
    }
  ]

  getIsAuthorizeInfo(event: boolean) {
    this.isAuthorize = event;
  }

  getMenuItems(): IMenuItem[] {
    return this.isAuthorize ? this.authorizedMenu : this.unauthorizedMenu;
  }
}
