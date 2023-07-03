import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { IMenuItem } from '../../models/menu.interface';
import { MenuService } from '../../services/menu.service';
import { BehaviorSubject, map, tap } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() menuItems: IMenuItem[] = [];
  
  public isAuthorized$: BehaviorSubject<boolean> = this._menuService.isAuthorize$;

  constructor(private _menuService: MenuService) {}

  authorize() {
    this._menuService.isAuthorize$.next(!this.isAuthorized$.getValue());
  }
}
