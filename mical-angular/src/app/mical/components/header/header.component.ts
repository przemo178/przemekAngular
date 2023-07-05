import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MenuService } from '../../services/menu.service';
import { BehaviorSubject } from 'rxjs';
import { CarouselService } from '../../services/carousel.service';
import { ICarouselItem } from '../../models/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public buttonClick: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public isAuthorized$: BehaviorSubject<boolean> =
    this._menuService.isAuthorize$;

  constructor(private _menuService: MenuService) {}

  onClick(isOpen: boolean) {
    this.buttonClick.emit(isOpen);
  }

  // setAuthotrize() {
  //   this._menuService.menuItems$.next([{name: 'Dupa'}])
  // }
}
