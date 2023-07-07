import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { IMenuItem, ICarouselItem } from '../models/menu.interface';
import { MenuService } from '../services/menu.service';
import { BehaviorSubject } from 'rxjs';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-mical-container',
  templateUrl: './mical-container.component.html',
  styleUrls: ['./mical-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MicalContainerComponent implements OnInit {
  // menu section
  public menuItems$: BehaviorSubject<IMenuItem[]> =
    this._menuService.menuItems$;

  public showText: boolean = false;

  public isVisible$: boolean = false;

  public carouselItems$: BehaviorSubject<ICarouselItem[]> =
    this._carouselService.carouselItems$;

  constructor(
    private _menuService: MenuService,
    private _carouselService: CarouselService
  ) {}

  ngOnInit(): void {
    this._menuService.getMenuItems().subscribe((menuItems) => {
      this._menuService.menuItems$.next(menuItems);
    }),
      this._carouselService.getCarouselItems().subscribe((carouselItems) => {
        this._carouselService.carouselItems$.next(carouselItems);
      });
  }

  getIsCarouselInfo(event: boolean) {
    this.isVisible$ = event;
  }
}
