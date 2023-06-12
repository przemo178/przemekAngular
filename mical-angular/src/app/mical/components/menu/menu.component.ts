import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../../models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() public menuItems: IMenuItem[] = [];
  @Output() public authorizeEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public isAuthorized: boolean = false;

  authorize(isAuthorize: boolean) {
    this.authorizeEmitter.emit(isAuthorize);
    this.isAuthorized = isAuthorize;
  }
}
