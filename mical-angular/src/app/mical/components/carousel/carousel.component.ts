import { ChangeDetectionStrategy, AfterViewInit, Component, EventEmitter, Input, Output, OnInit, QueryList, ViewChild, ViewChildren, AfterContentInit, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import { ICarouselItem } from '../../models/menu.interface';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() public carouselItems: ICarouselItem[] = [];
  public isVisibled$: BehaviorSubject<boolean> =
    this._carouselService.isVisible$;

  @ViewChildren(CarouselItemComponent) public carouselChild: QueryList<CarouselItemComponent>; 
  @ViewChild('naszDiv') public naszDivZmienna: HTMLDivElement; 

  observer: Observable<boolean> = new Observable();
  unsubscribe$: Subject<void> = new Subject<void>();

  public isVisibled: boolean = false;

  constructor(private _carouselService: CarouselService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
    console.log(changes, 'SimpleChanges')
  }

  ngOnInit(): void {
    console.log(this.carouselChild, 'this.carouselChild w OnInit')
    console.log('OnInit')

    this.observer.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      console.log('log')
    })
  }

  ngDoCheck(): void {
    console.log(this.carouselChild, 'this.carouselChild w ngDoCheck');
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log(this.carouselChild, 'this.carouselChild w ngAfterContentInit');
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log(
      this.carouselChild,
      'this.carouselChild w ngAfterContentChecked'
    );
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log(this.carouselChild, 'this.carouselChild w ngAfterViewInit');
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log(this.carouselChild, 'this.carouselChild w ngAfterViewChecked');
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log(this.carouselChild, 'this.carouselChild w ngOnDestroy');
    console.log('ngOnDestroy');

    this.unsubscribe$.next();
  }

  // visible(isVisible: boolean) {
  //   this.visibleEmitter.emit(isVisible);
  //   this.isVisibled = isVisible;
  // }

  // visible() {
  //   this._carouselService.isVisible$.next(!this.isVisibled$.getValue());
  // }

  // switchEditMode() {
  //   this.editMode = !this.editMode;
  // }
}