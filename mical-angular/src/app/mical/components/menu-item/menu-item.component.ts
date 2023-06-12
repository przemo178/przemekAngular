import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../models/menu.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() public menuItem: IMenuItem;
}
