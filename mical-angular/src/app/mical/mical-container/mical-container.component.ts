import { Component, ChangeDetectionStrategy, Input, Output, OnInit } from '@angular/core';
import { IMenuItem, ICarouselItem } from '../models/menu.interface';
import { MenuService } from '../services/menu.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mical-container',
  templateUrl: './mical-container.component.html',
  styleUrls: ['./mical-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MicalContainerComponent implements OnInit {
  // menu section
  public menuItems$: BehaviorSubject<IMenuItem[]> = this._menuService.menuItems$;

  public showText: boolean = false;

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

  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this._menuService.getMenuItems().subscribe(menuItems => {
      this._menuService.menuItems$.next(menuItems)
    })
  }

  getIsCarouselInfo(event: boolean) {
    this.isVisible = event;
  }

  getCarouselItems(): ICarouselItem[] {
    return this.isVisible ? this.carouselItems : this.carouselItems;
  }
}
